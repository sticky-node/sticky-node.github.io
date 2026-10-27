package stickynode.canvas

import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.w3c.dom.HTMLAnchorElement
import org.w3c.dom.HTMLInputElement
import org.w3c.files.Blob
import org.w3c.files.BlobPropertyBag
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine
import kotlin.js.Promise

@Serializable
private class StickyDocument(
    val app: String = "",
    val version: Int = 1,
    val strokeItems: List<Stroke> = emptyList(),
    val textItems: List<TextItem> = emptyList(),
    val rectangleItems: List<RectangleItem> = emptyList(),
    val circleItems: List<CircleItem> = emptyList(),
    val polygonItems: List<PolygonItem> = emptyList(),
    val arrowItems: List<ArrowItem> = emptyList(),
)

@OptIn(ExperimentalSerializationApi::class)
private val prettyJson = Json(from = json) {
    prettyPrint = true
    prettyPrintIndent = "  "
}

fun serialize(state: State): String = prettyJson.encodeToString(
    StickyDocument.serializer(),
    StickyDocument(
        "sticky-node", 1,
        state.strokeItems, state.textItems, state.rectangleItems,
        state.circleItems, state.polygonItems, state.arrowItems
    )
)

fun applyDocument(state: State, text: String) {
    if (text.isBlank()) throw Exception("The file is empty")
    val doc = json.decodeFromString(StickyDocument.serializer(), text)
    if (doc.app != "sticky-node") throw Exception("Not a Sticky Node file")

    state.strokeItems.clear(); state.strokeItems.addAll(doc.strokeItems)
    state.textItems.clear(); state.textItems.addAll(doc.textItems)
    state.rectangleItems.clear(); state.rectangleItems.addAll(doc.rectangleItems)
    state.circleItems.clear(); state.circleItems.addAll(doc.circleItems)
    state.polygonItems.clear(); state.polygonItems.addAll(doc.polygonItems)
    state.arrowItems.clear(); state.arrowItems.addAll(doc.arrowItems)
}

suspend fun saveToFile(state: State, suggestedName: String = "drawing.sticky.json") {
    val content = serialize(state)

    if (window.asDynamic().showSaveFilePicker != undefined) {
        try {
            val accept = js("({})")
            accept["application/json"] = arrayOf(".json")
            val type = js("({})")
            type.description = "Sticky Node drawing"
            type.accept = accept
            val options = js("({})")
            options.suggestedName = suggestedName
            options.types = arrayOf(type)

            val handle = window.asDynamic().showSaveFilePicker(options).unsafeCast<Promise<dynamic>>().await()
            val writable = handle.createWritable().unsafeCast<Promise<dynamic>>().await()
            writable.write(content).unsafeCast<Promise<dynamic>>().await()
            writable.close().unsafeCast<Promise<dynamic>>().await()
        } catch (error: Throwable) {
            if (error.asDynamic().name != "AbortError") throw error
        }
        return
    }

    val blob = Blob(arrayOf<dynamic>(content), BlobPropertyBag(type = "application/json"))
    val url = window.asDynamic().URL.createObjectURL(blob).unsafeCast<String>()
    val link = document.createElement("a") as HTMLAnchorElement
    link.href = url
    link.download = suggestedName
    document.body!!.appendChild(link)
    link.click()
    link.remove()
    window.setTimeout({ window.asDynamic().URL.revokeObjectURL(url); Unit }, 1000)
}

suspend fun openFromFile(state: State): Boolean = suspendCoroutine { continuation ->
    val input = document.createElement("input") as HTMLInputElement
    input.type = "file"
    input.accept = ".json,application/json"
    input.onchange = {
        val file = input.files?.item(0)
        if (file == null) {
            continuation.resume(false)
        } else {
            MainScope().launch {
                try {
                    val text = file.asDynamic().text().unsafeCast<Promise<String>>().await()
                    applyDocument(state, text)
                    continuation.resume(true)
                } catch (error: Throwable) {
                    window.alert("Couldn't open that file: " + error.message)
                    continuation.resume(false)
                }
            }
        }
        null
    }
    input.click()
}
