package stickynode.canvas

import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.events.MouseEvent
import kotlin.math.abs
import kotlin.math.min

fun getMousePosition(canvas: HTMLCanvasElement, event: MouseEvent): Point {
    val rectangle = canvas.getBoundingClientRect()
    return Point(event.clientX - rectangle.left, event.clientY - rectangle.top)
}

class BoundingBox(val x: Double, val y: Double, val width: Double, val height: Double)

fun getBoundingBox(start: Point, end: Point) = BoundingBox(
    x = min(start.x, end.x),
    y = min(start.y, end.y),
    width = abs(end.x - start.x),
    height = abs(end.y - start.y)
)
