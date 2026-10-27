package stickynode.canvas.events

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import stickynode.canvas.Point
import stickynode.canvas.State
import kotlin.math.hypot

private fun takeCanvasSnapshot(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, state: State, position: Point) {
    state.startPosition = position
    state.lastPosition = position
    state.canvasSnapshot = context.getImageData(
        0.0,
        0.0,
        canvas.width.toDouble(),
        canvas.height.toDouble()
    )
}

fun handleShapeMouseDown(h: Handlers, position: Point): Boolean {
    val state = h.state
    val config = SHAPE_CONFIGS[state.tool] ?: return false

    if (config.beginEdit(state, position)) return true

    takeCanvasSnapshot(h.canvas, h.context, state, position)
    return true
}

fun handleShapeMouseMove(h: Handlers, position: Point): Boolean {
    val state = h.state
    val config = SHAPE_CONFIGS[state.tool]
    val start = state.startPosition

    if (config != null && start != null) {
        h.context.putImageData(state.canvasSnapshot!!, 0.0, 0.0)
        config.drawPreview(h.context, start, position, state)
        return true
    }

    val arrow = state.editingArrow
    if (arrow != null) {
        val offset = state.editOffset!!
        val dx = arrow.endX - arrow.startX
        val dy = arrow.endY - arrow.startY
        val newStartX = position.x - offset.x
        val newStartY = position.y - offset.y
        arrow.startX = newStartX
        arrow.startY = newStartY
        arrow.endX = newStartX + dx
        arrow.endY = newStartY + dy
        h.render()
        return true
    }

    val offset = state.editOffset
    val circle = state.editingCircle
    val rectangle = state.editingRectangle
    val polygon = state.editingPolygon
    when {
        circle != null -> {
            circle.x = position.x - offset!!.x
            circle.y = position.y - offset.y
        }
        rectangle != null -> {
            rectangle.x = position.x - offset!!.x
            rectangle.y = position.y - offset.y
        }
        polygon != null -> {
            polygon.x = position.x - offset!!.x
            polygon.y = position.y - offset.y
        }
        else -> return false
    }
    h.render()
    return true
}

fun handleShapeMouseUp(h: Handlers): Boolean {
    val state = h.state
    val config = SHAPE_CONFIGS[state.tool] ?: return false

    if (config.isEditing(state)) {
        h.saveCanvas()
        config.endEdit(state)
        state.editOffset = null
        return true
    }

    val start = state.startPosition
    if (start != null) {
        val endPosition = state.lastPosition!!
        val moved = hypot(endPosition.x - start.x, endPosition.y - start.y) > 3

        if (moved) {
            config.addItem(state, start, endPosition)
        }
        h.context.putImageData(state.canvasSnapshot!!, 0.0, 0.0)
        h.render()
        h.saveCanvas()
    }

    state.startPosition = null
    state.canvasSnapshot = null
    return true
}
