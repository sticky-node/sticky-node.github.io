package stickynode.canvas

import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.w3c.dom.ImageData
import stickynode.tools.DEFAULT_FONT_SIZE

@OptIn(ExperimentalSerializationApi::class)
val json = Json {
    ignoreUnknownKeys = true
    encodeDefaults = true
    explicitNulls = false
}

@Serializable
data class Point(val x: Double, val y: Double)

interface Fillable {
    var fill: String?
}

@Serializable
class Stroke(var points: MutableList<Point>, val color: String, val lineWidth: Int = 3)

@Serializable
class TextItem(
    var x: Double,
    var y: Double,
    var color: String,
    var text: String,
    var fontSize: Int = DEFAULT_FONT_SIZE
)

@Serializable
class RectangleItem(
    var x: Double, var y: Double, val width: Double, val height: Double,
    val color: String, val lineWidth: Int = 3,
    override var fill: String? = null
) : Fillable

@Serializable
class CircleItem(
    var x: Double, var y: Double, val width: Double, val height: Double,
    val color: String, val lineWidth: Int = 3,
    override var fill: String? = null
) : Fillable

@Serializable
class PolygonItem(
    var x: Double, var y: Double, val width: Double, val height: Double,
    val sides: Int, val color: String, val lineWidth: Int = 3,
    override var fill: String? = null
) : Fillable

@Serializable
class ArrowItem(
    var startX: Double, var startY: Double, var endX: Double, var endY: Double,
    val color: String, val lineWidth: Int = 3
)

@Serializable
class Items(
    val strokeItems: List<Stroke>,
    val textItems: List<TextItem>,
    val rectangleItems: List<RectangleItem>,
    val circleItems: List<CircleItem>,
    val polygonItems: List<PolygonItem>,
    val arrowItems: List<ArrowItem>,
)

class State {
    var tool = "draw"
    var selectedColor = "#000000"
    var erasing = false
    var drawing = false
    var startPosition: Point? = null
    var canvasSnapshot: ImageData? = null
    val strokeItems = mutableListOf<Stroke>()
    val textItems = mutableListOf<TextItem>()
    val rectangleItems = mutableListOf<RectangleItem>()
    val circleItems = mutableListOf<CircleItem>()
    val polygonItems = mutableListOf<PolygonItem>()
    val arrowItems = mutableListOf<ArrowItem>()
    var polygonSides = 5
    var currentStroke: Stroke? = null
    var editingStroke: Stroke? = null
    var editingCircle: CircleItem? = null
    var editingRectangle: RectangleItem? = null
    var editingPolygon: PolygonItem? = null
    var editingArrow: ArrowItem? = null
    var editingText: TextItem? = null
    var pendingTextPosition: Point? = null
    var editOffset: Point? = null
    var lastPosition: Point? = null
    var lineWidth = 3
    var fontSize = 20
}
