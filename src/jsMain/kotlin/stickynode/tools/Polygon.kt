package stickynode.tools

import kotlin.math.PI
import org.w3c.dom.CanvasRenderingContext2D
import stickynode.canvas.Point
import stickynode.canvas.PolygonItem
import stickynode.canvas.getBoundingBox
import kotlin.math.cos
import kotlin.math.min
import kotlin.math.sin

fun drawPolygon(context: CanvasRenderingContext2D, startPosition: Point, currentPosition: Point, sides: Int, color: String, lineWidth: Int = 3) {
    val box = getBoundingBox(startPosition, currentPosition)
    drawStoredPolygon(context, PolygonItem(box.x, box.y, box.width, box.height, sides, color, lineWidth))
}

fun drawStoredPolygon(context: CanvasRenderingContext2D, item: PolygonItem) {
    val centerX = item.x + item.width / 2
    val centerY = item.y + item.height / 2
    val radius = min(item.width, item.height) / 2
    val angleStep = (PI * 2) / item.sides

    context.globalCompositeOperation = "source-over"
    context.strokeStyle = item.color
    context.lineWidth = item.lineWidth.toDouble()
    context.beginPath()

    for (index in 0 until item.sides) {
        val angle = -PI / 2 + index * angleStep
        val pointX = centerX + radius * cos(angle)
        val pointY = centerY + radius * sin(angle)

        if (index == 0) {
            context.moveTo(pointX, pointY)
        } else {
            context.lineTo(pointX, pointY)
        }
    }

    context.closePath()
    val fill = item.fill
    if (!fill.isNullOrEmpty()) {
        context.fillStyle = fill
        context.fill()
    }
    context.stroke()
}
