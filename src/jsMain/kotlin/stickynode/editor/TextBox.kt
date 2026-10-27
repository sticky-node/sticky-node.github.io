package stickynode.editor

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.events.KeyboardEvent
import stickynode.model.Point

/** The floating textarea used to type or edit text on the canvas. */
object TextBox {
    private const val CLASS_NAME = "sticky-node-textbox"

    fun isOpen(): Boolean = document.querySelector("textarea.$CLASS_NAME") != null

    /**
     * Shows a textarea at [at]. Enter (without Shift) or clicking away confirms and calls [onCommit]
     * with the trimmed text (possibly empty); Escape cancels. Does nothing if a box is already open.
     */
    fun show(
        canvas: HTMLCanvasElement,
        at: Point,
        color: String,
        initialText: String = "",
        onCommit: (String) -> Unit
    ) {
        if (isOpen()) return

        val bounds = canvas.getBoundingClientRect()
        val box = document.createElement("textarea") as HTMLTextAreaElement
        box.className = CLASS_NAME
        with(box.style) {
            position = "fixed"
            left = "${bounds.left + at.x - 8}px"
            top = "${bounds.top + at.y - 8}px"
            boxSizing = "content-box"
            width = "180px"
            height = "70px"
            padding = "6px"
            margin = "0"
            backgroundColor = "white"
            border = "2px solid red"
            this.color = color
            zIndex = "1000"
        }
        box.value = initialText
        document.body!!.appendChild(box)

        var finished = false
        var armed = false // ignore blur until focus has settled

        fun finish(commit: Boolean) {
            if (finished) return
            finished = true
            val text = box.value.trim()
            box.remove()
            if (commit) onCommit(text)
        }

        window.requestAnimationFrame {
            box.focus()
            box.select()
            window.requestAnimationFrame { armed = true }
        }

        box.addEventListener("keydown", { e ->
            val event = e as KeyboardEvent
            if (event.key == "Enter" && !event.shiftKey) {
                event.preventDefault()
                finish(true)
            }
            if (event.key == "Escape") finish(false)
        })

        box.addEventListener("blur", {
            if (armed) finish(true) else box.focus()
        })
    }
}
