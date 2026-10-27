package stickynode.tools

import org.w3c.dom.CanvasRenderingContext2D
import stickynode.canvas.Point
import stickynode.canvas.RectangleItem

fun drawRectangle(context: CanvasRenderingContext2D, startPosition: Point, currentPosition: Point, color: String, lineWidth: Int = 3) {
    context.globalCompositeOperation = "source-over"
    context.strokeStyle = color
    context.lineWidth = lineWidth.toDouble()
    context.strokeRect(
        startPosition.x,
        startPosition.y,
        currentPosition.x - startPosition.x,
        currentPosition.y - startPosition.y
    )
}

fun drawStoredRectangle(context: CanvasRenderingContext2D, item: RectangleItem) {
    context.globalCompositeOperation = "source-over"
    val fill = item.fill
    if (!fill.isNullOrEmpty()) {
        context.fillStyle = fill
        context.fillRect(item.x, item.y, item.width, item.height)
    }
    context.lineWidth = item.lineWidth.toDouble()
    context.strokeStyle = item.color
    context.strokeRect(item.x, item.y, item.width, item.height)
}
