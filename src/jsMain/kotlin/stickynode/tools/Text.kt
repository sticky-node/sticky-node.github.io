package stickynode.tools

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.events.KeyboardEvent
import stickynode.canvas.Point
import stickynode.canvas.TextItem
import kotlin.math.floor

const val DEFAULT_FONT_SIZE = 20
fun getLineHeight(fontSize: Int = DEFAULT_FONT_SIZE): Int = floor(fontSize * 1.2 + 0.5).toInt()

fun createTextBox(
    canvas: HTMLCanvasElement,
    position: Point,
    color: String,
    textItem: TextItem? = null,
    fontSize: Int = DEFAULT_FONT_SIZE,
    onCommit: (TextItem) -> Unit
) {
    val bounds = canvas.getBoundingClientRect()
    val textBox = document.createElement("textarea") as HTMLTextAreaElement

    textBox.className = "sticky-node-textbox"
    textBox.style.position = "fixed"
    textBox.style.left = "${bounds.left + position.x - 8}px"
    textBox.style.top = "${bounds.top + position.y - 8}px"
    textBox.style.boxSizing = "content-box"
    textBox.style.width = "180px"
    textBox.style.height = "70px"
    textBox.style.padding = "6px"
    textBox.style.margin = "0"
    textBox.style.backgroundColor = "white"
    textBox.style.border = "2px solid red"
    textBox.style.color = color
    textBox.style.zIndex = "1000"
    textBox.value = textItem?.text ?: ""

    document.body!!.appendChild(textBox)

    var committed = false
    var allowBlur = false

    val commitText = {
        if (!committed) {
            committed = true

            val text = textBox.value.trim()

            if (text.isNotEmpty()) {
                onCommit(
                    TextItem(
                        x = textItem?.x ?: position.x,
                        y = textItem?.y ?: position.y,
                        color = textItem?.color ?: color,
                        fontSize = fontSize,
                        text = text
                    )
                )
            }

            textBox.remove()
        }
    }

    window.requestAnimationFrame {
        textBox.focus()
        textBox.select()
        window.requestAnimationFrame {
            allowBlur = true
        }
    }

    textBox.addEventListener("keydown", { e ->
        val event = e as KeyboardEvent
        if (event.key == "Enter" && !event.shiftKey) {
            event.preventDefault()
            commitText()
        }

        if (event.key == "Escape") {
            committed = true
            textBox.remove()
        }
    })

    textBox.addEventListener("blur", {
        if (!allowBlur) {
            textBox.focus()
        } else {
            commitText()
        }
    })
}
