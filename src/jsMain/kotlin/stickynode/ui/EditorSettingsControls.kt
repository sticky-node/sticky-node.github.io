package stickynode.ui

import org.w3c.dom.HTMLInputElement
import stickynode.editor.Editor

internal fun setupEditorSettingsControls(editor: Editor) {
    byId<HTMLInputElement>("colorPicker")?.let { picker ->
        picker.addEventListener("input", { editor.color = picker.value })
    }
    byId<HTMLInputElement>("backgroundColorPicker")?.let { picker ->
        picker.value = editor.backgroundColor
        picker.addEventListener("input", { editor.setBackgroundColor(picker.value) })
    }
    bindRange("lineWidthInput", "lineWidthValue") { editor.lineWidth = it }
    bindRange("fontSizeInput", "fontSizeValue") { editor.fontSize = it }
}
