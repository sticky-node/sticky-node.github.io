package stickynode

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLCanvasElement
import stickynode.editor.Editor
import stickynode.ui.setupCanvasEvents
import stickynode.ui.setupControls
import stickynode.storage.ImageCache

fun main() {
    val canvas = document.getElementById("drawingcanvas") as HTMLCanvasElement
    val editor = Editor(canvas)

    editor.fitToWindow()
    setupCanvasEvents(editor)
    setupControls(editor)

    window.addEventListener("resize", { editor.fitToWindow() })
    
    ImageCache.onLoaded = { editor.requestRender() }
}
