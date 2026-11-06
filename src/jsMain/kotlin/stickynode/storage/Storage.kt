package stickynode.storage

import kotlinx.browser.localStorage
import stickynode.model.APP_ID
import stickynode.model.DecodedDrawing
import stickynode.model.decodeDrawingData
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

    fun load(): DecodedDrawing = try {
        val saved = localStorage.getItem(KEY)
        if (saved != null) decodeDrawingData(saved) else migrateLegacy()
    } catch (error: Throwable) {
        console.warn("Couldn't restore the saved drawing", error)
        DecodedDrawing(emptyList(), "#ffffff")
    }

    fun save(snapshot: String) {
        try {
            localStorage.setItem(KEY, snapshot)
        } catch (error: Throwable) {
            console.warn("Couldn't autosave (storage full or unavailable)", error)
        }
    }

    /** Converts the old per-type keys into the current format once, then deletes them. */
    private fun migrateLegacy(): DecodedDrawing {
        if (legacyKeys.all { localStorage.getItem(it) == null }) {
            return DecodedDrawing(emptyList(), "#ffffff")
        }

        fun list(key: String) = localStorage.getItem(key) ?: "[]"
        // Reuses the v1 file reader by assembling the same shape a v1 file has.
        val v1 = """{"app":"$APP_ID","version":1,""" +
            """"strokeItems":${list(LEGACY_STROKES)},"rectangleItems":${list(LEGACY_RECTANGLES)},""" +
            """"circleItems":${list(LEGACY_CIRCLES)},"polygonItems":${list(LEGACY_POLYGONS)},""" +
            """"arrowItems":${list(LEGACY_ARROWS)},"textItems":${list(LEGACY_TEXT)}}"""

        val drawing = decodeDrawingData(v1)
        save(encodeDrawing(drawing.items, backgroundColor = drawing.backgroundColor))
        legacyKeys.forEach { localStorage.removeItem(it) }
        return drawing
    }
}
