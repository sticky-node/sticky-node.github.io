package stickynode.model

import kotlinx.browser.document
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.math.PI
import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.max
import kotlin.math.min
import kotlin.math.roundToInt
import kotlin.math.sin
import kotlin.math.floor

const val DEFAULT_LINE_WIDTH = 3
const val DEFAULT_FONT_SIZE = 20

private const val MIN_HIT_RADIUS = 8.0

/** Items with an interior that the fill tool can colour. */
interface Fillable {
    var fill: String?
}

/** Items described by a bounding box. */
interface Boxed {
    var x: Double
    var y: Double
    val width: Double
    val height: Double
}

private val Boxed.centerX: Double get() = x + width / 2
private val Boxed.centerY: Double get() = y + height / 2

fun lineHeight(fontSize: Int): Int = (fontSize * 1.2).roundToInt()

private fun hitRadius(lineWidth: Int) = max(MIN_HIT_RADIUS, lineWidth / 2.0 + 2.0)

private fun CanvasRenderingContext2D.roundStroke() {
    asDynamic().lineCap = "round"
    asDynamic().lineJoin = "round"
}

/** Fills (if a colour is set) and strokes the current path. */
private fun CanvasRenderingContext2D.paint(fillColor: String?, strokeColor: String, width: Int) {
    if (!fillColor.isNullOrEmpty()) {
        fillStyle = fillColor
        fill()
    }
    strokeStyle = strokeColor
    lineWidth = width.toDouble()
    stroke()
}

/**
 * Everything on the canvas is an [Item]. Items know how to draw themselves, hit-test and move,
 * so tools, the eraser and rendering never need to care which concrete type they are handling.
 * The list order is the z-order: later items are drawn on top.
 */
@Serializable
sealed class Item {
    abstract fun draw(ctx: CanvasRenderingContext2D)
    abstract fun hitTest(p: Point): Boolean
    abstract fun moveBy(dx: Double, dy: Double)
    open fun hitTestFill(p: Point): Boolean = hitTest(p)
}

@Serializable
@SerialName("stroke")
class StrokeItem(
    val points: MutableList<Point>,
    val color: String,
    val lineWidth: Int = DEFAULT_LINE_WIDTH,
    override var fill: String? = null
) : Item(), Fillable {
    override fun draw(ctx: CanvasRenderingContext2D) {
        if (points.size < 2) return
        ctx.roundStroke()
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (i in 1 until points.size) ctx.lineTo(points[i].x, points[i].y)
        // fill() implicitly closes the path; the stroke stays open, as drawn.
        ctx.paint(fill, color, lineWidth)
    }

    private fun nearLine(p: Point): Boolean {
        val radius = hitRadius(lineWidth)
        if (points.size == 1) return p.distanceTo(points[0]) <= radius
        for (i in 0 until points.size - 1) {
            if (distanceToSegment(p, points[i], points[i + 1]) <= radius) return true
        }
        return false
    }

    private fun inside(p: Point) = points.size >= 3 && pointInPolygon(p, points)

    /** Once filled, the interior counts too, so it can be dragged and erased like other filled shapes. */
    override fun hitTest(p: Point): Boolean =
        nearLine(p) || (!fill.isNullOrEmpty() && inside(p))

    /** The fill tool can target the interior of a stroke even before it has a fill. */
    override fun hitTestFill(p: Point): Boolean = nearLine(p) || inside(p)

    override fun moveBy(dx: Double, dy: Double) {
        for (i in points.indices) {
            val point = points[i]
            points[i] = Point(point.x + dx, point.y + dy)
        }
    }
}

@Serializable
@SerialName("rectangle")
class RectangleItem(
    override var x: Double,
    override var y: Double,
    override val width: Double,
    override val height: Double,
    val color: String,
    val lineWidth: Int = DEFAULT_LINE_WIDTH,
    override var fill: String? = null
) : Item(), Boxed, Fillable {
    override fun draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.rect(x, y, width, height)
        ctx.paint(fill, color, lineWidth)
    }

    override fun hitTest(p: Point) = p.x in x..(x + width) && p.y in y..(y + height)

    override fun moveBy(dx: Double, dy: Double) {
        x += dx
        y += dy
    }
}

@Serializable
@SerialName("circle")
class CircleItem(
    override var x: Double,
    override var y: Double,
    override val width: Double,
    override val height: Double,
    val color: String,
    val lineWidth: Int = DEFAULT_LINE_WIDTH,
    override var fill: String? = null
) : Item(), Boxed, Fillable {
    override fun draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, width / 2, height / 2, 0.0, 0.0, 2 * PI)
        ctx.paint(fill, color, lineWidth)
    }

    override fun hitTest(p: Point): Boolean {
        val radiusX = width / 2
        val radiusY = height / 2
        if (radiusX == 0.0 || radiusY == 0.0) return false
        val nx = (p.x - centerX) / radiusX
        val ny = (p.y - centerY) / radiusY
        return nx * nx + ny * ny <= 1.0
    }

    override fun moveBy(dx: Double, dy: Double) {
        x += dx
        y += dy
    }
}

@Serializable
@SerialName("polygon")
class PolygonItem(
    override var x: Double,
    override var y: Double,
    override val width: Double,
    override val height: Double,
    val sides: Int,
    val color: String,
    val lineWidth: Int = DEFAULT_LINE_WIDTH,
    override var fill: String? = null
) : Item(), Boxed, Fillable {
    private fun vertices(): List<Point> {
        val count = sides.coerceAtLeast(3)
        val radius = min(width, height) / 2
        val step = 2 * PI / count
        return List(count) { i ->
            val angle = -PI / 2 + i * step
            Point(centerX + radius * cos(angle), centerY + radius * sin(angle))
        }
    }

    override fun draw(ctx: CanvasRenderingContext2D) {
        val points = vertices()
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (i in 1 until points.size) ctx.lineTo(points[i].x, points[i].y)
        ctx.closePath()
        ctx.paint(fill, color, lineWidth)
    }

    /** Proper point-in-polygon test (ray casting), so the empty corners outside the shape don't count. */
    override fun hitTest(p: Point): Boolean {
        if (min(width, height) == 0.0) return false
        val points = vertices()
        var inside = false
        var previous = points.lastIndex
        for (i in points.indices) {
            val a = points[i]
            val b = points[previous]
            if ((a.y > p.y) != (b.y > p.y) &&
                p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x
            ) {
                inside = !inside
            }
            previous = i
        }
        return inside
    }

    override fun moveBy(dx: Double, dy: Double) {
        x += dx
        y += dy
    }
}

@Serializable
@SerialName("arrow")
class ArrowItem(
    var startX: Double,
    var startY: Double,
    var endX: Double,
    var endY: Double,
    val color: String,
    val lineWidth: Int = DEFAULT_LINE_WIDTH
) : Item() {
    override fun draw(ctx: CanvasRenderingContext2D) {
        val headLength = max(16.0, lineWidth * 4.0)
        val angle = atan2(endY - startY, endX - startX)
        val spread = PI / 6

        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth.toDouble()
        ctx.roundStroke()
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.moveTo(endX - headLength * cos(angle - spread), endY - headLength * sin(angle - spread))
        ctx.lineTo(endX, endY)
        ctx.lineTo(endX - headLength * cos(angle + spread), endY - headLength * sin(angle + spread))
        ctx.stroke()
    }

    override fun hitTest(p: Point) =
        distanceToSegment(p, Point(startX, startY), Point(endX, endY)) <= hitRadius(lineWidth)

    override fun moveBy(dx: Double, dy: Double) {
        startX += dx
        startY += dy
        endX += dx
        endY += dy
    }
}

/** Offscreen context used only to measure text, so hit-testing never depends on what was last drawn. */
private val measureContext: CanvasRenderingContext2D by lazy {
    (document.createElement("canvas") as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D
}

@Serializable
@SerialName("text")
class TextItem(
    var x: Double,
    var y: Double,
    var color: String,
    var text: String,
    var fontSize: Int = DEFAULT_FONT_SIZE
) : Item() {
    private fun fontSpec() = "${fontSize}px sans-serif"
    private fun lines() = text.split("\n")

    override fun draw(ctx: CanvasRenderingContext2D) {
        ctx.asDynamic().textBaseline = "top"
        ctx.font = fontSpec()
        ctx.fillStyle = color
        val step = lineHeight(fontSize)
        lines().forEachIndexed { index, line -> ctx.fillText(line, x, y + index * step) }
    }

    override fun hitTest(p: Point): Boolean {
        if (text.isEmpty()) return false
        measureContext.font = fontSpec()
        val lines = lines()
        val width = max(1.0, lines.maxOf { measureContext.measureText(it).width })
        val height = (lines.size * lineHeight(fontSize)).toDouble()
        return p.x in x..(x + width) && p.y in y..(y + height)
    }

    override fun moveBy(dx: Double, dy: Double) {
        x += dx
        y += dy
    }
}

/** A filled area found by flood fill. [runs] holds triples: y, xStart, xEnd (exclusive). */
@Serializable
@SerialName("regionFill")
class RegionFillItem(
    val runs: List<Int>,
    val color: String,
    var offsetX: Double = 0.0,
    var offsetY: Double = 0.0
) : Item() {
    override fun draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = color
        var i = 0
        while (i < runs.size) {
            val y = runs[i]
            val x0 = runs[i + 1]
            val x1 = runs[i + 2]
            // Grown by 1px so the fill tucks under the anti-aliased edges of the lines.
            ctx.fillRect(x0 + offsetX - 1, y + offsetY - 1, (x1 - x0 + 2).toDouble(), 3.0)
            i += 3
        }
    }

    override fun hitTest(p: Point): Boolean {
        val y = floor(p.y - offsetY).toInt()
        val x = floor(p.x - offsetX).toInt()
        var i = 0
        while (i < runs.size) {
            if (runs[i] == y && x >= runs[i + 1] && x < runs[i + 2]) return true
            i += 3
        }
        return false
    }

    override fun moveBy(dx: Double, dy: Double) {
        offsetX += dx
        offsetY += dy
    }
}