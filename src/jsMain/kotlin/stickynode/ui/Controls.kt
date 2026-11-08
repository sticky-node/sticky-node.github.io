package stickynode.ui

import stickynode.editor.Editor
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch

private val scope = MainScope()

fun setupControls(editor: Editor) {
    setupToolControls(editor)
    setupEditorSettingsControls(editor)
    setupDocumentControls(editor)
    setupKeyboardShortcuts(editor)
    setupAccountControls()
    setupServerControls(editor, scope)
    setupImageControls(editor, scope)
}
