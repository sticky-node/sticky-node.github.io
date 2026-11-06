package stickynode.ui

import kotlinx.browser.document
import org.w3c.dom.HTMLInputElement
import stickynode.editor.Editor

internal fun setupToolControls(editor: Editor) {
    val tools = editor.tools

    onClick("drawButton") { editor.selectTool(tools.freehand) }
    onClick("rectangleButton") { editor.selectTool(tools.rectangle) }
    onClick("circleButton") { editor.selectTool(tools.circle) }
    onClick("arrowButton") { editor.selectTool(tools.arrow) }
    onClick("textButton") { editor.selectTool(tools.text) }
    onClick("fillButton") { editor.selectTool(tools.fill) }
    onClick("imageToolButton") { editor.selectTool(tools.image) }
    onClick("eraserButton") {
        editor.selectTool(if (editor.tool === tools.eraser) tools.freehand else tools.eraser)
    }
    onClick("polygonButton") {
        val sides = byId<HTMLInputElement>("polygonSidesInput")?.value?.toDoubleOrNull()?.toInt()
        if (sides != null && sides >= 3) {
            editor.polygonSides = sides
            editor.selectTool(tools.polygon)
        }
    }

    val toolButtons = mapOf(
        tools.freehand to "drawButton",
        tools.rectangle to "rectangleButton",
        tools.circle to "circleButton",
        tools.polygon to "polygonButton",
        tools.arrow to "arrowButton",
        tools.text to "textButton",
        tools.fill to "fillButton",
        tools.eraser to "eraserButton",
        tools.image to "imageToolButton"
    )
    editor.onToolChanged = { tool ->
        toolButtons.forEach { (candidate, id) ->
            document.getElementById(id)?.classList?.toggle("active", candidate === tool)
        }
    }
}
