package stickynode.tools

import kotlin.math.PI
import org.w3c.dom.CanvasRenderingContext2D
import stickynode.canvas.ArrowItem
import stickynode.canvas.Point
import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.max
import kotlin.math.sin

fun drawArrowLine(
    context: CanvasRenderingContext2D,
    fromX: Double, fromY: Double, toX: Double, toY: Double,
    color: String, lineWidth: Int = 3
) {
    val headLength = max(16.0, lineWidth * 4.0)
    val angle = atan2(toY - fromY, toX - fromX)

    context.strokeStyle = color
    context.lineWidth = lineWidth.toDouble()
    context.asDynamic().lineCap = "round"
    context.asDynamic().lineJoin = "round"

    context.beginPath()
    context.moveTo(fromX, fromY)
    context.lineTo(toX, toY)
    context.stroke()

    val arrowAngle = PI / 6
    context.beginPath()
    context.moveTo(
        toX - headLength * cos(angle - arrowAngle),
        toY - headLength * sin(angle - arrowAngle)
    )
    context.lineTo(toX, toY)
    context.lineTo(
        toX - headLength * cos(angle + arrowAngle),
        toY - headLength * sin(angle + arrowAngle)
    )
    context.stroke()
}

fun drawArrow(context: CanvasRenderingContext2D, startPosition: Point, currentPosition: Point, color: String, lineWidth: Int = 3) {
    context.globalCompositeOperation = "source-over"
    drawArrowLine(context, startPosition.x, startPosition.y, currentPosition.x, currentPosition.y, color, lineWidth)
}

fun drawStoredArrow(context: CanvasRenderingContext2D, item: ArrowItem) {
    drawArrowLine(context, item.startX, item.startY, item.endX, item.endY, item.color, item.lineWidth)
}
