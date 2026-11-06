package stickynode.ui

import kotlinx.browser.document
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement

internal inline fun <reified T : Element> byId(id: String): T? =
    document.getElementById(id) as? T

internal fun onClick(id: String, action: () -> Unit) {
    document.getElementById(id)?.addEventListener("click", { action() })
}

internal fun bindRange(inputId: String, labelId: String, onChange: (Int) -> Unit) {
    val input = byId<HTMLInputElement>(inputId) ?: return
    val label = document.getElementById(labelId)
    input.addEventListener("input", {
        input.value.toIntOrNull()?.let(onChange)
        label?.textContent = input.value
    })
}
