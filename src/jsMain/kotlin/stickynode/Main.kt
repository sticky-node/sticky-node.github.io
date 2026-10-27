package stickynode

import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import stickynode.canvas.*
import stickynode.canvas.render.renderOverlay

fun main() {
    val canvas = document.getElementById("drawingcanvas") as HTMLCanvasElement
    val context = canvas.getContext("2d", js("({willReadFrequently: true})")) as CanvasRenderingContext2D
    val textCanvas = document.createElement("canvas") as HTMLCanvasElement
    val textContext = textCanvas.getContext("2d") as CanvasRenderingContext2D
    textCanvas.id = "textcanvas"
    canvas.asDynamic().after(textCanvas)

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    textCanvas.width = canvas.width
    textCanvas.height = canvas.height
    val syncTextCanvasPosition = {
        textCanvas.style.top = "${canvas.offsetTop}px"
    }
    syncTextCanvasPosition()

    val state = State()

    loadCanvas(canvas, context, state)
    renderOverlay(textContext, state)

    val history = History(state)
    val persist = { saveCanvas(canvas, state) }
    val commit: () -> Unit = {
        persist()
        history.record()
    }

    val isBusy = {
        state.startPosition != null || state.currentStroke != null || state.editingStroke != null ||
            state.editingCircle != null || state.editingRectangle != null || state.editingPolygon != null ||
            state.editingArrow != null || state.editingText != null || state.pendingTextPosition != null
    }

    val applyHistory = { action: () -> Boolean ->
        if (!isBusy()) {
            if (action()) {
                renderOverlay(textContext, state)
                persist()
            }
        }
    }

    window.addEventListener("resize", {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        textCanvas.width = canvas.width
        textCanvas.height = canvas.height
        syncTextCanvasPosition()
        renderOverlay(textContext, state)
    })

    setupControls(
        state = state,
        undo = { applyHistory { history.undo() } },
        redo = { applyHistory { history.redo() } },
        clearCanvas = {
            clearCanvas(canvas, context, state)
            renderOverlay(textContext, state)
            history.record()
        },
    )

    document.getElementById("saveFileButton")!!.addEventListener("click", {
        MainScope().launch { saveToFile(state) }
    })

    document.getElementById("openFileButton")!!.addEventListener("click", {
        MainScope().launch {
            if (openFromFile(state)) {
                context.clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
                renderOverlay(textContext, state)
                saveCanvas(canvas, state)
                history.record()
            }
        }
    })

    setupCanvasEvents(
        canvas = canvas,
        context = context,
        state = state,
        textContext = textContext,
        renderOverlay = ::renderOverlay,
        saveCanvas = commit,
    )
}
