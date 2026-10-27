package stickynode.canvas.events

import kotlinx.browser.document
import org.w3c.dom.events.MouseEvent
import stickynode.canvas.Point
import stickynode.tools.createTextBox

private fun openNewTextBox(h: Handlers, position: Point) {
    if (document.querySelector("textarea.sticky-node-textbox") != null) return

    val state = h.state
    createTextBox(
        canvas = h.canvas,
        position = position,
        color = state.selectedColor,
        fontSize = state.fontSize,
        onCommit = { updatedText ->
            state.textItems.add(updatedText)
            h.render()
            h.saveCanvas()
        }
    )
}

fun handleTextMouseDown(h: Handlers, event: MouseEvent, position: Point): Boolean {
    val state = h.state
    if (state.tool != "text") return false

    event.preventDefault()
    val existingText = findTextAt(h.textContext, state.textItems, position)

    if (event.button.toInt() == 0) {
        if (existingText != null) {
            state.editingText = existingText
            state.pendingTextPosition = null
            state.editOffset = Point(
                position.x - existingText.x,
                position.y - existingText.y
            )
            return true
        }

        state.pendingTextPosition = position
        return true
    }

    if (event.button.toInt() != 2) return true

    if (existingText == null) return true

    createTextBox(
        canvas = h.canvas,
        position = Point(existingText.x, existingText.y),
        color = state.selectedColor,
        fontSize = state.fontSize,
        textItem = existingText,
        onCommit = { updatedText ->
            existingText.x = updatedText.x
            existingText.y = updatedText.y
            existingText.color = updatedText.color
            existingText.fontSize = updatedText.fontSize
            existingText.text = updatedText.text
            h.render()
            h.saveCanvas()
        }
    )
    return true
}

fun handleTextMouseMove(h: Handlers, position: Point): Boolean {
    val state = h.state
    if (state.pendingTextPosition != null) return true

    val editing = state.editingText ?: return false

    val offset = state.editOffset!!
    editing.x = position.x - offset.x
    editing.y = position.y - offset.y
    h.render()
    return true
}

fun handleTextMouseUp(h: Handlers): Boolean {
    val state = h.state
    if (state.tool != "text") return false

    if (state.editingText != null) {
        h.saveCanvas()
        state.editingText = null
        state.editOffset = null
        return true
    }

    val pending = state.pendingTextPosition
    if (pending != null) {
        state.pendingTextPosition = null
        openNewTextBox(h, pending)
    }

    return true
}
