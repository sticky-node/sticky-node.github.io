package stickynode.tools

import stickynode.canvas.Fillable
import stickynode.canvas.Point
import stickynode.canvas.State
import stickynode.canvas.events.findCircleAt
import stickynode.canvas.events.findPolygonAt
import stickynode.canvas.events.findRectangleAt

fun fillAt(state: State, position: Point, color: String?): Boolean {
    val target: Fillable? =
        findPolygonAt(state.polygonItems, position)
            ?: findCircleAt(state.circleItems, position)
            ?: findRectangleAt(state.rectangleItems, position)

    if (target == null) return false

    if (color == null) {
        if (target.fill.isNullOrEmpty()) return false
        target.fill = null
        return true
    }

    if (target.fill == color) return false
    target.fill = color
    return true
}
