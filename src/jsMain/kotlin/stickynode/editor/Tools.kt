package stickynode.editor

import stickynode.model.CircleItem
import stickynode.model.Fillable
import stickynode.model.Item
import stickynode.model.Point
import stickynode.model.PolygonItem
import stickynode.model.RectangleItem
import stickynode.model.StrokeItem
import stickynode.model.TextItem
import kotlin.math.hypot
import stickynode.model.RegionFillItem
import stickynode.model.ImageItem

private const val MIN_SHAPE_DRAG = 3.0

/** A mouse-driven editing mode. Tools keep their own gesture state; the [Editor] owns the drawing. */
interface Tool {
    /** True for tools that also use the right mouse button (and so suppress the context menu). */
    val claimsMouse: Boolean get() = false

    /** True while a gesture is in progress; undo/redo are ignored meanwhile. */
    val busy: Boolean get() = false

    fun cancel(ed: Editor) = Unit

    fun onDown(ed: Editor, p: Point, button: Int)
    fun onMove(ed: Editor, p: Point)
    fun onUp(ed: Editor)
}

/** Drags one item around by following the mouse. */
private class Dragger {
    private var target: Item? = null
    private var last = Point(0.0, 0.0)

    val active: Boolean get() = target != null

    fun start(item: Item, at: Point) {
        target = item
        last = at
    }

    fun move(to: Point): Boolean {
        val item = target ?: return false
        item.moveBy(to.x - last.x, to.y - last.y)
        last = to
        return true
    }

    fun end(): Boolean {
        val wasActive = target != null
        target = null
        return wasActive
    }

    fun cancel() {
        target = null
    }
}

class FreehandTool : Tool {
    private val drag = Dragger()
    private var stroke: StrokeItem? = null

    override val busy: Boolean get() = drag.active || stroke != null

    override fun cancel(ed: Editor) {
        drag.cancel()
        stroke = null
        ed.preview = null
    }

    override fun onDown(ed: Editor, p: Point, button: Int) {
        val existing = ed.findTop(p) { it is StrokeItem }
        if (existing != null) {
            drag.start(existing, p)
            return
        }
        val fresh = StrokeItem(mutableListOf(p), ed.color, ed.lineWidth)
        stroke = fresh
        ed.preview = fresh
    }

    override fun onMove(ed: Editor, p: Point) {
        if (drag.move(p)) {
            ed.requestRender()
            return
        }
        val current = stroke ?: return
        if (current.points.last() != p) {
            current.points.add(p)
            ed.requestRender()
        }
    }

    override fun onUp(ed: Editor) {
        if (drag.end()) {
            ed.commit()
            return
        }
        val finished = stroke ?: return
        stroke = null
        ed.preview = null
        if (finished.points.size >= 2) ed.items.add(finished)
        ed.render()
        ed.commit()
    }
}

/** Drag out a new shape, or pick up an existing one of the same kind ([owns]) and move it. */
class ShapeTool(
    private val owns: (Item) -> Boolean,
    private val create: (Editor, Point, Point) -> Item
) : Tool {
    private val drag = Dragger()
    private var start: Point? = null
    private var current: Point? = null

    override val busy: Boolean get() = drag.active || start != null

    override fun cancel(ed: Editor) {
        drag.cancel()
        start = null
        current = null
        ed.preview = null
    }

    override fun onDown(ed: Editor, p: Point, button: Int) {
        val existing = ed.findTop(p, owns)
        if (existing != null) {
            drag.start(existing, p)
        } else {
            start = p
            current = p
        }
    }

    override fun onMove(ed: Editor, p: Point) {
        if (drag.move(p)) {
            ed.requestRender()
            return
        }
        val origin = start ?: return
        current = p
        ed.preview = create(ed, origin, p)
        ed.requestRender()
    }

    override fun onUp(ed: Editor) {
        if (drag.end()) {
            ed.commit()
            return
        }
        val origin = start ?: return
        val end = current ?: origin
        start = null
        current = null
        ed.preview = null
        if (hypot(end.x - origin.x, end.y - origin.y) > MIN_SHAPE_DRAG) {
            ed.items.add(create(ed, origin, end))
        }
        ed.render()
        ed.commit()
    }
}

class TextTool : Tool {
    override val claimsMouse = true

    private val drag = Dragger()
    private var pending: Point? = null

    override val busy: Boolean get() = drag.active || pending != null

    override fun cancel(ed: Editor) {
        drag.cancel()
        pending = null
    }

    override fun onDown(ed: Editor, p: Point, button: Int) {
        val existing = ed.findTop(p) { it is TextItem } as? TextItem
        when (button) {
            0 -> {
                if (existing != null) {
                    drag.start(existing, p)
                } else {
                    // The box opens on mouse-up so the click doesn't steal the textarea's focus.
                    pending = p
                }
            }
            2 -> {
                if (existing != null) edit(ed, existing)
            }
            else -> Unit
        }
    }

    override fun onMove(ed: Editor, p: Point) {
        if (drag.move(p)) ed.requestRender()
    }

    override fun onUp(ed: Editor) {
        if (drag.end()) {
            ed.commit()
            return
        }
        val at = pending ?: return
        pending = null
        addNew(ed, at)
    }

    private fun addNew(ed: Editor, at: Point) {
        val color = ed.color
        val fontSize = ed.fontSize
        TextBox.show(ed.canvas, at, color) { text ->
            if (text.isNotEmpty()) {
                ed.items.add(TextItem(at.x, at.y, color, text, fontSize))
                ed.render()
                ed.commit()
            }
        }
    }

    private fun edit(ed: Editor, item: TextItem) {
        TextBox.show(ed.canvas, Point(item.x, item.y), item.color, item.text) { text ->
            if (text.isEmpty()) {
                ed.items.remove(item)
            } else {
                item.text = text
            }
            ed.render()
            ed.commit()
        }
    }
}

class FillTool : Tool {
    override val claimsMouse = true

    override fun onDown(ed: Editor, p: Point, button: Int) {
        // 1. Clicking inside a rectangle, circle, polygon or single stroke works as before.
        val native = ed.items.lastOrNull { it is Fillable && it.hitTestFill(p) } as? Fillable
        if (native != null) {
            val newFill = if (button == 2) null else ed.color
            if (newFill == native.fill || (newFill == null && native.fill.isNullOrEmpty())) return
            native.fill = newFill
            ed.render()
            ed.commit()
            return
        }

        // 2. Otherwise fill the area enclosed by any combination of items.
        val old = ed.items.lastOrNull { it is RegionFillItem && it.hitTest(p) }

        if (button == 2) { // right-click removes a region fill
            if (old != null) {
                ed.items.remove(old)
                ed.render()
                ed.commit()
            }
            return
        }

        val runs = findEnclosedRegion(ed, p) ?: return
        if (old != null) ed.items.remove(old) // clicking again recolors it
        ed.items.add(0, RegionFillItem(runs, ed.color))
        ed.render()
        ed.commit()
    }

    override fun onMove(ed: Editor, p: Point) = Unit
    override fun onUp(ed: Editor) = Unit
}

class EraserTool : Tool {
    private var active = false
    private var erased = false

    override val busy: Boolean get() = active

    override fun cancel(ed: Editor) {
        active = false
        erased = false
    }

    override fun onDown(ed: Editor, p: Point, button: Int) {
        active = true
        erase(ed, p)
    }

    override fun onMove(ed: Editor, p: Point) {
        if (active) erase(ed, p)
    }

    override fun onUp(ed: Editor) {
        if (!active) return
        active = false
        if (erased) {
            erased = false
            ed.commit()
        }
    }

    private fun erase(ed: Editor, p: Point) {
        val index = ed.items.indexOfLast { it.hitTest(p) }
        if (index < 0) return
        ed.items.removeAt(index)
        erased = true
        ed.requestRender()
    }
}

const val HANDLE_SIZE = 10.0
private const val HANDLE_HIT = 12.0
private const val MIN_IMAGE_SIZE = 20.0

class ImageTool : Tool {
    private val drag = Dragger()
    private var resizing: ImageItem? = null
    private var anchor = Point(0.0, 0.0)
    private var dirX = 1.0
    private var dirY = 1.0
    private var aspect = 1.0

    override val busy: Boolean get() = drag.active || resizing != null

    override fun onDown(ed: Editor, p: Point, button: Int) {
        val sel = ed.selected as? ImageItem
        if (sel != null && sel in ed.items) {
            val corners = sel.corners()
            val i = corners.indexOfFirst { it.distanceTo(p) <= HANDLE_HIT }
            if (i >= 0) {
                anchor = corners[3 - i] // the opposite corner stays fixed
                dirX = if (i % 2 == 1) 1.0 else -1.0
                dirY = if (i >= 2) 1.0 else -1.0
                aspect = if (sel.width > 0) sel.height / sel.width else 1.0
                resizing = sel
                return
            }
        }

        val hit = ed.findTop(p) { it is ImageItem }
        ed.selected = hit
        if (hit != null) drag.start(hit, p)
        ed.requestRender()
    }

    override fun onMove(ed: Editor, p: Point) {
        val img = resizing
        if (img != null) {
            val w = maxOf(MIN_IMAGE_SIZE, (p.x - anchor.x) * dirX)
            val h = w * aspect
            img.width = w
            img.height = h
            img.x = if (dirX > 0) anchor.x else anchor.x - w
            img.y = if (dirY > 0) anchor.y else anchor.y - h
            ed.requestRender()
            return
        }
        if (drag.move(p)) ed.requestRender()
    }

    override fun onUp(ed: Editor) {
        if (resizing != null) {
            resizing = null
            ed.commit()
            return
        }
        if (drag.end()) ed.commit()
    }
}