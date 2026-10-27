package stickynode.editor

import kotlinx.browser.window
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import stickynode.model.DEFAULT_FONT_SIZE
import stickynode.model.DEFAULT_LINE_WIDTH
import stickynode.model.Item
import stickynode.model.Point
import stickynode.model.decodeDrawing
import stickynode.model.encodeDrawing
import stickynode.storage.Storage

/**
 * Owns the drawing: the item list, the current tool and brush settings, rendering,
 * autosave and undo/redo. Everything is drawn on a single canvas straight from the item list.
 */
class Editor(val canvas: HTMLCanvasElement) {
    private val ctx = canvas.getContext("2d") as CanvasRenderingContext2D

    /** All items in z-order (last = topmost). */
    val items = mutableListOf<Item>()

    /** In-progress item (e.g. the shape being dragged out), drawn above everything but not yet part of the drawing. */
    var preview: Item? = null

    var color = "#000000"
    var lineWidth = DEFAULT_LINE_WIDTH
    var fontSize = DEFAULT_FONT_SIZE
    var polygonSides = 5

    val tools = ToolSet()
    var tool: Tool = tools.freehand
        private set
    var onToolChanged: ((Tool) -> Unit)? = null

    private val history: History
    private var renderQueued = false

    init {
        items.addAll(Storage.load())
        history = History(encodeDrawing(items))
    }

    fun selectTool(next: Tool) {
        preview = null
        tool = next
        onToolChanged?.invoke(next)
        requestRender()
    }

    /** The topmost item under [p] that satisfies [accept]. */
    fun findTop(p: Point, accept: (Item) -> Boolean = { true }): Item? =
        items.lastOrNull { accept(it) && it.hitTest(p) }

    fun render() {
        ctx.clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
        for (item in items) drawItem(item)
        preview?.let { drawItem(it) }
    }

    /** Coalesces bursts of mouse events into at most one render per animation frame. */
    fun requestRender() {
        if (renderQueued) return
        renderQueued = true
        window.requestAnimationFrame {
            renderQueued = false
            render()
        }
    }

    private fun drawItem(item: Item) {
        ctx.save()
        item.draw(ctx)
        ctx.restore()
    }

    fun fitToWindow() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        render()
    }

    /** Call after a completed change: records an undo step and autosaves, but only if something actually changed. */
    fun commit() {
        val snapshot = encodeDrawing(items)
        if (history.record(snapshot)) Storage.save(snapshot)
    }

    fun undo() {
        if (!tool.busy) restore(history.undo())
    }

    fun redo() {
        if (!tool.busy) restore(history.redo())
    }

    private fun restore(snapshot: String?) {
        if (snapshot == null) return
        replaceItems(decodeDrawing(snapshot))
        Storage.save(snapshot)
        render()
    }

    fun clear() {
        replaceItems(emptyList())
        render()
        commit()
    }

    /** Replaces the whole drawing, e.g. after opening a file. */
    fun load(newItems: List<Item>) {
        replaceItems(newItems)
        render()
        commit()
    }

    fun exportJson(): String = encodeDrawing(items, pretty = true)

    private fun replaceItems(newItems: List<Item>) {
        preview = null
        items.clear()
        items.addAll(newItems)
    }
}
