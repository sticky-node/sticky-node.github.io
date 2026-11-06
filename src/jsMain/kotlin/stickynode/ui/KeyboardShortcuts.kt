package stickynode.ui

import kotlinx.browser.document
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.EventTarget
import org.w3c.dom.events.KeyboardEvent
import stickynode.editor.Editor

private val textInputTypes = setOf("text", "number")

private fun isTyping(target: EventTarget?): Boolean {
    val element = target as? Element ?: return false
    return element.tagName == "TEXTAREA" ||
        (element is HTMLInputElement && element.type in textInputTypes)
}

internal fun setupKeyboardShortcuts(editor: Editor) {
    document.addEventListener("keydown", { event ->
        val keyboardEvent = event as KeyboardEvent
        if (!(keyboardEvent.ctrlKey || keyboardEvent.metaKey) || isTyping(keyboardEvent.target)) {
            return@addEventListener
        }

        when (keyboardEvent.key.lowercase()) {
            "z" -> {
                keyboardEvent.preventDefault()
                if (keyboardEvent.shiftKey) editor.redo() else editor.undo()
            }
            "y" -> {
                keyboardEvent.preventDefault()
                editor.redo()
            }
        }
    })
}
