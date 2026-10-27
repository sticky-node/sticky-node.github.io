@file:OptIn(ExperimentalSerializationApi::class)

package stickynode.model

import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

const val APP_ID = "sticky-node"
private const val FORMAT_VERSION = 2

private val json = Json {
    ignoreUnknownKeys = true
    encodeDefaults = true
    explicitNulls = false
}

private val prettyJson = Json(from = json) {
    prettyPrint = true
    prettyPrintIndent = "  "
}

/** Current format (v2): one z-ordered list of items. */
@Serializable
private class DrawingFile(
    val app: String = "",
    val version: Int = 1,
    val items: List<Item> = emptyList()
)

/** Format v1: one list per item type. Only ever read, never written. */
@Serializable
private class LegacyDrawing(
    val strokeItems: List<StrokeItem> = emptyList(),
    val rectangleItems: List<RectangleItem> = emptyList(),
    val circleItems: List<CircleItem> = emptyList(),
    val polygonItems: List<PolygonItem> = emptyList(),
    val arrowItems: List<ArrowItem> = emptyList(),
    val textItems: List<TextItem> = emptyList()
) {
    /** Same layer order the old renderer used, so old drawings look identical. */
    fun toItems(): List<Item> = buildList {
        addAll(strokeItems)
        addAll(rectangleItems)
        addAll(circleItems)
        addAll(polygonItems)
        addAll(arrowItems)
        addAll(textItems)
    }
}

fun encodeDrawing(items: List<Item>, pretty: Boolean = false): String {
    val file = DrawingFile(APP_ID, FORMAT_VERSION, items)
    return (if (pretty) prettyJson else json).encodeToString(DrawingFile.serializer(), file)
}

/** Throws [IllegalArgumentException] with a user-presentable message if [text] isn't a valid drawing. */
fun decodeDrawing(text: String): List<Item> {
    if (text.isBlank()) throw IllegalArgumentException("The file is empty")

    val file = json.decodeFromString(DrawingFile.serializer(), text)
    if (file.app != APP_ID) throw IllegalArgumentException("Not a Sticky Node file")

    if (file.version >= FORMAT_VERSION) return file.items
    return json.decodeFromString(LegacyDrawing.serializer(), text).toItems()
}
