package stickynode.storage

import kotlinx.browser.localStorage
import stickynode.model.APP_ID
import stickynode.model.Item
import stickynode.model.decodeDrawing
import stickynode.model.encodeDrawing

/** Autosave to localStorage: one key holding the whole drawing. */
object Storage {
    private const val KEY = "stickyNode.drawing"

    // Keys used before the single-document format (the PNG snapshot is no longer needed).
    private const val LEGACY_PNG = "drawingCanvas"
    private const val LEGACY_STROKES = "drawingCanvasStrokes"
    private const val LEGACY_RECTANGLES = "drawingCanvasRectangles"
    private const val LEGACY_CIRCLES = "drawingCanvasCircles"
    private const val LEGACY_POLYGONS = "drawingCanvasPolygons"
    private const val LEGACY_ARROWS = "drawingCanvasArrows"
    private const val LEGACY_TEXT = "drawingCanvasText"
    private val legacyKeys = listOf(
        LEGACY_PNG, LEGACY_STROKES, LEGACY_RECTANGLES,
        LEGACY_CIRCLES, LEGACY_POLYGONS, LEGACY_ARROWS, LEGACY_TEXT
    )

    fun load(): List<Item> = try {
        val saved = localStorage.getItem(KEY)
        if (saved != null) decodeDrawing(saved) else migrateLegacy()
    } catch (error: Throwable) {
        console.warn("Couldn't restore the saved drawing", error)
        emptyList()
    }

    fun save(snapshot: String) {
        try {
            localStorage.setItem(KEY, snapshot)
        } catch (error: Throwable) {
            console.warn("Couldn't autosave (storage full or unavailable)", error)
        }
    }

    /** Converts the old per-type keys into the current format once, then deletes them. */
    private fun migrateLegacy(): List<Item> {
        if (legacyKeys.all { localStorage.getItem(it) == null }) return emptyList()

        fun list(key: String) = localStorage.getItem(key) ?: "[]"
        // Reuses the v1 file reader by assembling the same shape a v1 file has.
        val v1 = """{"app":"$APP_ID","version":1,""" +
            """"strokeItems":${list(LEGACY_STROKES)},"rectangleItems":${list(LEGACY_RECTANGLES)},""" +
            """"circleItems":${list(LEGACY_CIRCLES)},"polygonItems":${list(LEGACY_POLYGONS)},""" +
            """"arrowItems":${list(LEGACY_ARROWS)},"textItems":${list(LEGACY_TEXT)}}"""

        val items = decodeDrawing(v1)
        save(encodeDrawing(items))
        legacyKeys.forEach { localStorage.removeItem(it) }
        return items
    }
}
