package stickynode.tools

import org.w3c.dom.CanvasRenderingContext2D
import stickynode.canvas.Point
import stickynode.canvas.State
import stickynode.canvas.events.*

private fun <T> removeFirstMatching(list: MutableList<T>, predicate: (T) -> Boolean): Boolean {
    val index = list.indexOfLast(predicate)
    if (index != -1) {
        list.removeAt(index)
        return true
    }
    return false
}

fun eraseAt(state: State, position: Point, textContext: CanvasRenderingContext2D): Boolean {
    // Check text first (drawn on top)
    val text = findTextAt(textContext, state.textItems, position)
    if (text != null && removeFirstMatching(state.textItems) { it === text }) {
        return true
    }

    // Check shapes
    val circle = findCircleAt(state.circleItems, position)
    if (circle != null && removeFirstMatching(state.circleItems) { it === circle }) {
        return true
    }

    val polygon = findPolygonAt(state.polygonItems, position)
    if (polygon != null && removeFirstMatching(state.polygonItems) { it === polygon }) {
        return true
    }

    val rect = findRectangleAt(state.rectangleItems, position)
    if (rect != null && removeFirstMatching(state.rectangleItems) { it === rect }) {
        return true
    }

    val arrow = findArrowAt(state.arrowItems, position)
    if (arrow != null && removeFirstMatching(state.arrowItems) { it === arrow }) {
        return true
    }

    // Check strokes
    val stroke = findStrokeAt(state.strokeItems, position)
    if (stroke != null && removeFirstMatching(state.strokeItems) { it === stroke }) {
        return true
    }

    return false
}
