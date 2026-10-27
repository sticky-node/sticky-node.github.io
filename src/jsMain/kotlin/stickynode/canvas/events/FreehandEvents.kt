package stickynode.canvas.events

import stickynode.canvas.Point
import stickynode.canvas.Stroke
import stickynode.tools.eraseAt

fun handleFreehandMouseDown(h: Handlers, position: Point) {
    val state = h.state
    if (state.erasing) {
        state.drawing = true
        val removed = eraseAt(state, position, h.textContext)
        if (removed) {
            h.render()
            h.saveCanvas()
        }
        return
    }

    val existingStroke = findStrokeAt(state.strokeItems, position)
    if (existingStroke != null) {
        state.editingStroke = existingStroke
        state.editOffset = Point(
            position.x - existingStroke.points[0].x,
            position.y - existingStroke.points[0].y
        )
        return
    }

    val stroke = Stroke(mutableListOf(position), state.selectedColor, state.lineWidth)
    state.currentStroke = stroke
    state.strokeItems.add(stroke)
    h.render()
}

fun handleFreehandMouseMove(h: Handlers, position: Point) {
    val state = h.state
    if (state.erasing && state.drawing) {
        val removed = eraseAt(state, position, h.textContext)
        if (removed) {
            h.render()
            h.saveCanvas()
        }
        return
    }

    val editing = state.editingStroke
    if (editing != null) {
        val firstPoint = editing.points[0]
        val offset = state.editOffset!!
        val deltaX = position.x - offset.x - firstPoint.x
        val deltaY = position.y - offset.y - firstPoint.y

        editing.points = editing.points.map { Point(it.x + deltaX, it.y + deltaY) }.toMutableList()
        h.render()
        return
    }

    val current = state.currentStroke
    if (!state.erasing && current != null) {
        current.points.add(position)
        h.render()
        return
    }
}

fun handleFreehandMouseUp(h: Handlers) {
    val state = h.state
    if (state.editingStroke != null) {
        h.saveCanvas()
        state.editingStroke = null
        state.editOffset = null
        return
    }

    val current = state.currentStroke
    if (current != null) {
        if (current.points.size < 2) state.strokeItems.removeAt(state.strokeItems.lastIndex)
        h.saveCanvas()
        state.currentStroke = null
        return
    }

    state.drawing = false
}

fun handleFreehandMouseLeave(h: Handlers) {
    val state = h.state
    val current = state.currentStroke
    if (current != null && current.points.size < 2) {
        state.strokeItems.removeAt(state.strokeItems.lastIndex)
    }
    if (state.drawing || state.currentStroke != null || state.editingStroke != null) h.saveCanvas()
    state.drawing = false
    state.currentStroke = null
    state.editingStroke = null
    state.editOffset = null
}
