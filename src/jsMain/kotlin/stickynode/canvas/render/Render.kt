package stickynode.canvas.render

import org.w3c.dom.CanvasRenderingContext2D
import stickynode.canvas.State
import stickynode.canvas.Stroke
import stickynode.canvas.TextItem
import stickynode.tools.drawStoredArrow
import stickynode.tools.drawStoredCircle
import stickynode.tools.drawStoredPolygon
import stickynode.tools.drawStoredRectangle
import stickynode.tools.getLineHeight

private fun renderText(textContext: CanvasRenderingContext2D, textItems: List<TextItem>) {
    textContext.asDynamic().textBaseline = "top"

    textItems.forEach { item ->
        textContext.font = "${item.fontSize}px sans-serif"
        textContext.fillStyle = item.color
        val lineHeight = getLineHeight(item.fontSize)
        item.text.split("\n").forEachIndexed { index, line ->
            textContext.fillText(line, item.x, item.y + index * lineHeight)
        }
    }
}

private fun renderStrokes(context: CanvasRenderingContext2D, strokeItems: List<Stroke>) {
    strokeItems.forEach { stroke ->
        val points = stroke.points
        if (points.size < 2) return@forEach

        context.globalCompositeOperation = "source-over"
        context.strokeStyle = stroke.color
        context.lineWidth = stroke.lineWidth.toDouble()
        context.asDynamic().lineCap = "round"
        context.asDynamic().lineJoin = "round"
        context.beginPath()
        context.moveTo(points[0].x, points[0].y)

        points.drop(1).forEach { point ->
            context.lineTo(point.x, point.y)
        }

        context.stroke()
    }
}

fun renderOverlay(textContext: CanvasRenderingContext2D, state: State) {
    textContext.clearRect(0.0, 0.0, textContext.canvas.width.toDouble(), textContext.canvas.height.toDouble())

    renderStrokes(textContext, state.strokeItems)
    state.rectangleItems.forEach { drawStoredRectangle(textContext, it) }
    state.circleItems.forEach { drawStoredCircle(textContext, it) }
    state.polygonItems.forEach { drawStoredPolygon(textContext, it) }
    state.arrowItems.forEach { drawStoredArrow(textContext, it) }
    renderText(textContext, state.textItems)
}
