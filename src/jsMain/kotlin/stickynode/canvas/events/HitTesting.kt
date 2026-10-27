package stickynode.canvas.events

import org.w3c.dom.CanvasRenderingContext2D
import stickynode.canvas.*
import stickynode.tools.DEFAULT_FONT_SIZE
import stickynode.tools.getLineHeight
import kotlin.math.hypot
import kotlin.math.max
import kotlin.math.min

fun findCircleAt(circleItems: List<CircleItem>, position: Point): CircleItem? =
    circleItems.asReversed().firstOrNull { item ->
        val centerX = item.x + item.width / 2
        val centerY = item.y + item.height / 2
        val radiusX = item.width / 2
        val radiusY = item.height / 2

        if (radiusX == 0.0 || radiusY == 0.0) {
            false
        } else {
            val normalizedX = (position.x - centerX) / radiusX
            val normalizedY = (position.y - centerY) / radiusY
            normalizedX * normalizedX + normalizedY * normalizedY <= 1
        }
    }

fun findRectangleAt(rectangleItems: List<RectangleItem>, position: Point): RectangleItem? =
    rectangleItems.asReversed().firstOrNull { item ->
        position.x >= item.x &&
            position.x <= item.x + item.width &&
            position.y >= item.y &&
            position.y <= item.y + item.height
    }

fun findPolygonAt(polygonItems: List<PolygonItem>, position: Point): PolygonItem? =
    polygonItems.asReversed().firstOrNull { item ->
        val centerX = item.x + item.width / 2
        val centerY = item.y + item.height / 2
        val radius = min(item.width, item.height) / 2
        if (radius == 0.0) {
            false
        } else {
            hypot(position.x - centerX, position.y - centerY) <= radius
        }
    }

fun findStrokeAt(strokeItems: List<Stroke>, position: Point): Stroke? =
    strokeItems.asReversed().firstOrNull { stroke ->
        val points = stroke.points
        points.indices.any { index ->
            val point = points[index]
            val nextPoint = points.getOrNull(index + 1)
            if (nextPoint == null) {
                hypot(point.x - position.x, point.y - position.y) <= 8
            } else {
                val segmentX = nextPoint.x - point.x
                val segmentY = nextPoint.y - point.y
                val segmentLengthSquared = segmentX * segmentX + segmentY * segmentY
                val projection = if (segmentLengthSquared == 0.0) {
                    0.0
                } else {
                    max(
                        0.0,
                        min(
                            1.0,
                            ((position.x - point.x) * segmentX +
                                (position.y - point.y) * segmentY) /
                                segmentLengthSquared
                        )
                    )
                }
                val closestX = point.x + projection * segmentX
                val closestY = point.y + projection * segmentY

                hypot(position.x - closestX, position.y - closestY) <= 8
            }
        }
    }

private fun pointToSegmentDistance(px: Double, py: Double, x1: Double, y1: Double, x2: Double, y2: Double): Double {
    val dx = x2 - x1
    val dy = y2 - y1
    val lengthSq = dx * dx + dy * dy
    if (lengthSq == 0.0) return hypot(px - x1, py - y1)

    val t = max(0.0, min(1.0, ((px - x1) * dx + (py - y1) * dy) / lengthSq))
    val projX = x1 + t * dx
    val projY = y1 + t * dy
    return hypot(px - projX, py - projY)
}

fun findArrowAt(arrowItems: List<ArrowItem>, position: Point, threshold: Double = 8.0): ArrowItem? =
    arrowItems.asReversed().firstOrNull { item ->
        pointToSegmentDistance(position.x, position.y, item.startX, item.startY, item.endX, item.endY) <= threshold
    }

fun findTextAt(textContext: CanvasRenderingContext2D, textItems: List<TextItem>, position: Point): TextItem? {
    textContext.asDynamic().textBaseline = "top"

    return textItems.asReversed().firstOrNull { textItem ->
        if (textItem.text.isEmpty()) {
            false
        } else {
            val fontSize = textItem.fontSize
            textContext.font = "${fontSize}px sans-serif"
            val lines = textItem.text.split("\n")
            val width = max(
                lines.maxOf { line -> textContext.measureText(line).width },
                1.0
            )
            val height = lines.size * getLineHeight(fontSize)

            position.x >= textItem.x &&
                position.x <= textItem.x + width &&
                position.y >= textItem.y &&
                position.y <= textItem.y + height
        }
    }
}
