package stickynode.canvas

import kotlinx.browser.document
import kotlinx.browser.localStorage
import kotlinx.serialization.builtins.ListSerializer
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLImageElement

private const val storageKey = "drawingCanvas"
private const val textStorageKey = "drawingCanvasText"
private const val rectangleStorageKey = "drawingCanvasRectangles"
private const val circleStorageKey = "drawingCanvasCircles"
private const val polygonStorageKey = "drawingCanvasPolygons"
private const val strokeStorageKey = "drawingCanvasStrokes"
private const val arrowStorageKey = "drawingCanvasArrows"

fun saveCanvas(canvas: HTMLCanvasElement, state: State) {
    localStorage.setItem(storageKey, canvas.toDataURL("image/png"))
    localStorage.setItem(textStorageKey, json.encodeToString(ListSerializer(TextItem.serializer()), state.textItems))
    localStorage.setItem(rectangleStorageKey, json.encodeToString(ListSerializer(RectangleItem.serializer()), state.rectangleItems))
    localStorage.setItem(circleStorageKey, json.encodeToString(ListSerializer(CircleItem.serializer()), state.circleItems))
    localStorage.setItem(polygonStorageKey, json.encodeToString(ListSerializer(PolygonItem.serializer()), state.polygonItems))
    localStorage.setItem(strokeStorageKey, json.encodeToString(ListSerializer(Stroke.serializer()), state.strokeItems))
    localStorage.setItem(arrowStorageKey, json.encodeToString(ListSerializer(ArrowItem.serializer()), state.arrowItems))
}

fun loadCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, state: State) {
    localStorage.getItem(circleStorageKey)?.let {
        state.circleItems.addAll(json.decodeFromString(ListSerializer(CircleItem.serializer()), it))
    }
    localStorage.getItem(polygonStorageKey)?.let {
        state.polygonItems.addAll(json.decodeFromString(ListSerializer(PolygonItem.serializer()), it))
    }
    localStorage.getItem(strokeStorageKey)?.let {
        state.strokeItems.addAll(json.decodeFromString(ListSerializer(Stroke.serializer()), it))
    }
    localStorage.getItem(arrowStorageKey)?.let {
        state.arrowItems.addAll(json.decodeFromString(ListSerializer(ArrowItem.serializer()), it))
    }
    localStorage.getItem(textStorageKey)?.let {
        state.textItems.addAll(json.decodeFromString(ListSerializer(TextItem.serializer()), it))
    }
    localStorage.getItem(rectangleStorageKey)?.let {
        state.rectangleItems.addAll(json.decodeFromString(ListSerializer(RectangleItem.serializer()), it))
    }

    val savedDrawing = localStorage.getItem(storageKey) ?: return

    val image = document.createElement("img") as HTMLImageElement
    image.onload = {
        context.drawImage(image, 0.0, 0.0)
        null
    }
    image.src = savedDrawing
}

fun clearCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, state: State) {
    context.clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
    context.globalCompositeOperation = "source-over"
    localStorage.removeItem(storageKey)
    localStorage.removeItem(textStorageKey)
    localStorage.removeItem(rectangleStorageKey)
    localStorage.removeItem(circleStorageKey)
    localStorage.removeItem(polygonStorageKey)
    localStorage.removeItem(strokeStorageKey)
    localStorage.removeItem(arrowStorageKey)
    state.textItems.clear()
    state.rectangleItems.clear()
    state.circleItems.clear()
    state.polygonItems.clear()
    state.strokeItems.clear()
    state.arrowItems.clear()
}
