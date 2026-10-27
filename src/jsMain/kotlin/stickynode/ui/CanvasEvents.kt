package stickynode.ui

import kotlinx.browser.window
import org.w3c.dom.events.MouseEvent
import stickynode.editor.Editor
import stickynode.model.Point

private const val LEFT_BUTTON = 0
private const val RIGHT_BUTTON = 2

fun setupCanvasEvents(editor: Editor) {
    val canvas = editor.canvas

    fun position(event: MouseEvent): Point {
        val rect = canvas.getBoundingClientRect()
        return Point(event.clientX - rect.left, event.clientY - rect.top)
    }

    canvas.addEventListener("contextmenu", { event ->
        if (editor.tool.claimsMouse) event.preventDefault()
    })

    canvas.addEventListener("mousedown", { e ->
        val event = e as MouseEvent
        val button = event.button.toInt()
        val tool = editor.tool

        val allowed = button == LEFT_BUTTON || (button == RIGHT_BUTTON && tool.claimsMouse)
        if (!allowed) return@addEventListener

        if (tool.claimsMouse) event.preventDefault()
        if (tool.busy) tool.onUp(editor) // a previous release was lost; finish that gesture first
        tool.onDown(editor, position(event), button)
    })

    // Listening on window (not the canvas) so a drag keeps working when the cursor leaves the canvas.
    window.addEventListener("mousemove", { e ->
        val event = e as MouseEvent
        val tool = editor.tool
        if (!tool.busy) return@addEventListener

        if (event.buttons.toInt() == 0) {
            tool.onUp(editor) // button was released outside the window
        } else {
            tool.onMove(editor, position(event))
        }
    })

    window.addEventListener("mouseup", {
        editor.tool.onUp(editor)
    })
}
