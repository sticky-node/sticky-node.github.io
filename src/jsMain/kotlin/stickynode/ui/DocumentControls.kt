package stickynode.ui

import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import stickynode.editor.Editor
import stickynode.model.decodeDrawingData
import stickynode.storage.pickFileText
import stickynode.storage.saveToFile

private val scope = MainScope()

internal fun setupDocumentControls(editor: Editor) {
    onClick("undoButton") { editor.undo() }
    onClick("redoButton") { editor.redo() }
    onClick("clearButton") { editor.clear() }

    onClick("saveFileButton") {
        scope.launch {
            try {
                saveToFile(editor.exportJson())
            } catch (error: Throwable) {
                window.alert("Couldn't save the file: ${error.message}")
            }
        }
    }
    onClick("openFileButton") {
        scope.launch {
            try {
                val text = pickFileText() ?: return@launch
                val drawing = decodeDrawingData(text)
                editor.load(drawing.items, drawing.backgroundColor)
            } catch (error: Throwable) {
                window.alert("Couldn't open that file: ${error.message}")
            }
        }
    }

    setupServerControls(editor, scope)
    setupImageControls(editor, scope)
}
