package stickynode.ui

import stickynode.editor.Editor

fun setupControls(editor: Editor) {
    setupToolControls(editor)
    setupEditorSettingsControls(editor)
    setupDocumentControls(editor)
    setupKeyboardShortcuts(editor)
}
