package stickynode.canvas

import kotlinx.browser.document
import org.w3c.dom.Element
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.KeyboardEvent

private inline fun <reified T> byId(id: String): T? = document.getElementById(id) as? T

fun setupControls(state: State, clearCanvas: () -> Unit, undo: () -> Unit, redo: () -> Unit) {
    val clearButton = byId<HTMLButtonElement>("clearButton")!!
    val drawButton = byId<HTMLButtonElement>("drawButton")
    val rectangleButton = byId<HTMLButtonElement>("rectangleButton")!!
    val colorPicker = byId<HTMLInputElement>("colorPicker")!!
    val eraserButton = byId<HTMLButtonElement>("eraserButton")!!
    val textButton = byId<HTMLButtonElement>("textButton")!!
    val circleButton = byId<HTMLButtonElement>("circleButton")!!
    val arrowButton = byId<HTMLButtonElement>("arrowButton")
    val fillButton = byId<HTMLButtonElement>("fillButton")
    val polygonButton = byId<HTMLButtonElement>("polygonButton")!!
    val polygonSidesInput = byId<HTMLInputElement>("polygonSidesInput")!!
    val lineWidthInput = byId<HTMLInputElement>("lineWidthInput")
    val lineWidthValue = document.getElementById("lineWidthValue")
    val fontSizeInput = byId<HTMLInputElement>("fontSizeInput")
    val fontSizeValue = document.getElementById("fontSizeValue")

    fontSizeInput?.addEventListener("input", {
        state.fontSize = fontSizeInput.value.toDouble().toInt()
        fontSizeValue?.textContent = fontSizeInput.value
    })

    lineWidthInput?.addEventListener("input", {
        state.lineWidth = lineWidthInput.value.toDouble().toInt()
        lineWidthValue?.textContent = lineWidthInput.value
    })

    clearButton.addEventListener("click", { clearCanvas() })

    drawButton?.addEventListener("click", {
        state.tool = "draw"
        state.erasing = false
        eraserButton.textContent = "Eraser: Off"
    })

    rectangleButton.addEventListener("click", {
        state.tool = "rectangle"
        state.erasing = false
    })

    colorPicker.addEventListener("input", {
        state.selectedColor = colorPicker.value
    })

    eraserButton.addEventListener("click", {
        state.tool = "draw"
        state.erasing = !state.erasing
        eraserButton.textContent = if (state.erasing) "Eraser: On" else "Eraser: Off"
    })

    textButton.addEventListener("click", {
        state.tool = "text"
        state.erasing = false
    })

    circleButton.addEventListener("click", {
        state.tool = "circle"
        state.erasing = false
    })

    arrowButton?.addEventListener("click", {
        state.tool = "arrow"
        state.erasing = false
    })

    fillButton?.addEventListener("click", {
        state.tool = "fill"
        state.erasing = false
        eraserButton.textContent = "Eraser: Off"
    })

    polygonButton.addEventListener("click", {
        val sides = polygonSidesInput.value.toDoubleOrNull()?.toInt()
        if (sides != null && sides >= 3) {
            state.polygonSides = sides
            state.tool = "polygon"
            state.erasing = false
        }
    })

    // Undo / redo
    document.getElementById("undoButton")?.addEventListener("click", { undo() })
    document.getElementById("redoButton")?.addEventListener("click", { redo() })

    document.addEventListener("keydown", { e ->
        val event = e as KeyboardEvent
        val target = event.target as? Element
        val isTyping = target != null && (
            target.tagName == "TEXTAREA" ||
                (target.tagName == "INPUT" && (target as HTMLInputElement).type != "color")
            )
        if (isTyping) return@addEventListener
        if (!(event.ctrlKey || event.metaKey)) return@addEventListener

        val key = event.key.lowercase()
        if (key == "z" && !event.shiftKey) {
            event.preventDefault()
            undo()
        } else if ((key == "z" && event.shiftKey) || key == "y") {
            event.preventDefault()
            redo()
        }
    })
}
