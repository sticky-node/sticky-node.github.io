package stickynode.ui

import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.EventTarget
import org.w3c.dom.events.KeyboardEvent
import stickynode.editor.Editor
import stickynode.model.decodeDrawing
import stickynode.storage.pickFileText
import stickynode.storage.saveToFile
import stickynode.storage.configureServer
import stickynode.storage.listServerDrawings
import stickynode.storage.loadFromServer
import stickynode.storage.saveToServer
import kotlin.math.min
import kotlin.random.Random
import stickynode.model.ImageItem
import stickynode.storage.ImageCache
import stickynode.storage.pickImageFile
import stickynode.storage.uploadImage

private val scope = MainScope()
private val TEXT_INPUT_TYPES = setOf("text", "number")

private inline fun <reified T : Element> byId(id: String): T? = document.getElementById(id) as? T

private fun onClick(id: String, action: () -> Unit) {
    document.getElementById(id)?.addEventListener("click", { action() })
}

private fun bindRange(inputId: String, labelId: String, onChange: (Int) -> Unit) {
    val input = byId<HTMLInputElement>(inputId) ?: return
    val label = document.getElementById(labelId)
    input.addEventListener("input", {
        input.value.toIntOrNull()?.let(onChange)
        label?.textContent = input.value
    })
}

private fun isTyping(target: EventTarget?): Boolean {
    val element = target as? Element ?: return false
    return element.tagName == "TEXTAREA" ||
        (element is HTMLInputElement && element.type in TEXT_INPUT_TYPES)
}

fun setupControls(editor: Editor) {
    val tools = editor.tools

    // Tools
    onClick("drawButton") { editor.selectTool(tools.freehand) }
    onClick("rectangleButton") { editor.selectTool(tools.rectangle) }
    onClick("circleButton") { editor.selectTool(tools.circle) }
    onClick("arrowButton") { editor.selectTool(tools.arrow) }
    onClick("textButton") { editor.selectTool(tools.text) }
    onClick("fillButton") { editor.selectTool(tools.fill) }
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

    // Keeps the eraser label correct no matter how the tool was changed.
    val eraserButton = byId<HTMLButtonElement>("eraserButton")
    editor.onToolChanged = { tool ->
        eraserButton?.textContent = if (tool === tools.eraser) "Eraser: On" else "Eraser: Off"
    }

    // Brush settings
    byId<HTMLInputElement>("colorPicker")?.let { picker ->
        picker.addEventListener("input", { editor.color = picker.value })
    }
    bindRange("lineWidthInput", "lineWidthValue") { editor.lineWidth = it }
    bindRange("fontSizeInput", "fontSizeValue") { editor.fontSize = it }

    // History and canvas
    onClick("undoButton") { editor.undo() }
    onClick("redoButton") { editor.redo() }
    onClick("clearButton") { editor.clear() }

    // Files
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
                editor.load(decodeDrawing(text))
            } catch (error: Throwable) {
                window.alert("Couldn't open that file: ${error.message}")
            }
        }
    }
    
        // Server (Raspberry Pi)
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
                editor.load(decodeDrawing(loadFromServer(name)))
            } catch (error: Throwable) {
                window.alert("Couldn't open that drawing: ${error.message}")
            }
        }
    }
    
onClick("addImageButton") {
    scope.launch {
        try {
            val file = pickImageFile() ?: return@launch
            val ext = when (file.type) {
                "image/png" -> "png"
                "image/jpeg" -> "jpg"
                "image/gif" -> "gif"
                "image/webp" -> "webp"
                else -> throw IllegalArgumentException("Use a PNG, JPEG, GIF or WebP image")
            }
            if (file.size.toDouble() > 20 * 1024 * 1024) {
                throw IllegalArgumentException("Image is larger than 20 MB")
            }

            val id = "${(Random.nextLong() ushr 1).toString(36)}.$ext"
            uploadImage(id, file)
            val img = ImageCache.add(id, file)

            // Fit within 400px and centre on screen.
            val scale = min(1.0, 400.0 / maxOf(img.naturalWidth, img.naturalHeight))
            val w = img.naturalWidth * scale
            val h = img.naturalHeight * scale
            editor.items.add(
                ImageItem((editor.canvas.width - w) / 2, (editor.canvas.height - h) / 2, w, h, id)
            )
            editor.render()
            editor.commit()
        } catch (error: Throwable) {
            window.alert("Couldn't add the image: ${error.message}")
        }
    }
}

    // Keyboard shortcuts
    document.addEventListener("keydown", { e ->
        val event = e as KeyboardEvent
        if (!(event.ctrlKey || event.metaKey) || isTyping(event.target)) return@addEventListener

        when (event.key.lowercase()) {
            "z" -> {
                event.preventDefault()
                if (event.shiftKey) editor.redo() else editor.undo()
            }
            "y" -> {
                event.preventDefault()
                editor.redo()
            }
            else -> Unit
        }
    })
}
