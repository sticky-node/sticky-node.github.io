package stickynode.ui

import kotlinx.browser.window
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import stickynode.editor.Editor
import stickynode.model.decodeDrawingData
import stickynode.storage.configureServer
import stickynode.storage.listServerDrawings
import stickynode.storage.loadFromServer
import stickynode.storage.saveToServer

fun setupServerControls(editor: Editor, scope: CoroutineScope) {
    onClick("serverSettingsButton") { configureServer() }

    onClick("serverSaveButton") {
        val name = window.prompt("Save as (letters, numbers, - and _ only):", "drawing")?.trim()
        if (name.isNullOrEmpty()) return@onClick
        scope.launch {
            try {
                saveToServer(name, editor.exportJson())
                window.alert("Saved \"$name\" to the server.")
            } catch (error: Throwable) {
                window.alert("Couldn't save to the server: ${error.message}")
            }
        }
    }

    onClick("serverOpenButton") {
        scope.launch {
            try {
                val names = listServerDrawings()
                if (names.isEmpty()) {
                    window.alert("No saved drawings on the server yet.")
                    return@launch
                }
                val name = window.prompt(
                    "Open which drawing?\n\n" + names.joinToString("\n"),
                    names.first()
                )?.trim()
                if (name.isNullOrEmpty()) return@launch
                val drawing = decodeDrawingData(loadFromServer(name))
                editor.load(drawing.items, drawing.backgroundColor)
            } catch (error: Throwable) {
                window.alert("Couldn't open that drawing: ${error.message}")
            }
        }
    }
}
