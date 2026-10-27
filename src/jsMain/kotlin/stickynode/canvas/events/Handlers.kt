package stickynode.canvas.events

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import stickynode.canvas.State

class Handlers(
    val canvas: HTMLCanvasElement,
    val context: CanvasRenderingContext2D,
    val textContext: CanvasRenderingContext2D,
    val state: State,
    val saveCanvas: () -> Unit,
    val renderOverlay: (CanvasRenderingContext2D, State) -> Unit
) {
    fun render() = renderOverlay(textContext, state)
}
