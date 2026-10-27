package stickynode.canvas

import kotlinx.browser.window
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.events.MouseEvent
import stickynode.canvas.events.*
import stickynode.tools.fillAt

fun setupCanvasEvents(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    textContext: CanvasRenderingContext2D,
    state: State,
    saveCanvas: () -> Unit,
    renderOverlay: (CanvasRenderingContext2D, State) -> Unit
) {
    val h = Handlers(canvas, context, textContext, state, saveCanvas, renderOverlay)

    canvas.addEventListener("contextmenu", { event ->
        if (state.tool == "text" || state.tool == "fill") event.preventDefault()
    })

    canvas.addEventListener("mousedown", { e ->
        val event = e as MouseEvent
        val position = getMousePosition(canvas, event)

        if (state.erasing) {
            handleFreehandMouseDown(h, position)
            return@addEventListener
        }

        if (state.tool == "fill") {
            event.preventDefault()
            val color = if (event.button.toInt() == 2) null else state.selectedColor
            if (fillAt(state, position, color)) {
                h.render()
                saveCanvas()
            }
            return@addEventListener
        }

        if (handleTextMouseDown(h, event, position)) return@addEventListener
        if (handleShapeMouseDown(h, position)) return@addEventListener

        handleFreehandMouseDown(h, position)
    })

    canvas.addEventListener("mousemove", { e ->
        val position = getMousePosition(canvas, e as MouseEvent)
        state.lastPosition = position

        if (state.erasing) {
            handleFreehandMouseMove(h, position)
            return@addEventListener
        }

        if (handleTextMouseMove(h, position)) return@addEventListener
        if (handleShapeMouseMove(h, position)) return@addEventListener

        handleFreehandMouseMove(h, position)
    })

    // window, not canvas: a release outside the canvas must still end the drag
    window.addEventListener("mouseup", {
        if (state.erasing) {
            handleFreehandMouseUp(h)
            return@addEventListener
        }

        if (handleTextMouseUp(h)) return@addEventListener
        if (handleShapeMouseUp(h)) return@addEventListener

        handleFreehandMouseUp(h)
    })

    canvas.addEventListener("mouseleave", {
        handleFreehandMouseLeave(h)
    })
}
