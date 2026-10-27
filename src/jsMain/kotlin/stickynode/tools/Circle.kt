package stickynode.tools

import kotlin.math.PI
import org.w3c.dom.CanvasRenderingContext2D
import stickynode.canvas.CircleItem
import stickynode.canvas.Point
import stickynode.canvas.getBoundingBox

fun drawCircle(context: CanvasRenderingContext2D, startPosition: Point, currentPosition: Point, color: String, lineWidth: Int = 3) {
    val box = getBoundingBox(startPosition, currentPosition)
    drawStoredCircle(context, CircleItem(box.x, box.y, box.width, box.height, color, lineWidth))
}

fun drawStoredCircle(context: CanvasRenderingContext2D, item: CircleItem) {
    context.globalCompositeOperation = "source-over"
    context.strokeStyle = item.color
    context.lineWidth = item.lineWidth.toDouble()
    context.beginPath()
    context.ellipse(
        item.x + item.width / 2,
        item.y + item.height / 2,
        item.width / 2,
        item.height / 2,
        0.0,
        0.0,
        2 * PI
    )
    val fill = item.fill
    if (!fill.isNullOrEmpty()) {
        context.fillStyle = fill
        context.fill()
    }
    context.stroke()
}
