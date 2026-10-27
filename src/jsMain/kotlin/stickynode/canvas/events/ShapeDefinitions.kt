package stickynode.canvas.events

import org.w3c.dom.CanvasRenderingContext2D
import stickynode.canvas.*
import stickynode.tools.drawArrow
import stickynode.tools.drawCircle
import stickynode.tools.drawPolygon
import stickynode.tools.drawRectangle

abstract class ShapeConfig {
    /** If a shape of this type is under [position], start editing it. */
    abstract fun beginEdit(state: State, position: Point): Boolean
    abstract fun isEditing(state: State): Boolean
    abstract fun endEdit(state: State)
    abstract fun drawPreview(context: CanvasRenderingContext2D, start: Point, current: Point, state: State)
    abstract fun addItem(state: State, start: Point, end: Point)
}

class TypedShapeConfig<T : Any>(
    private val getItems: (State) -> MutableList<T>,
    private val findAt: (List<T>, Point) -> T?,
    private val getEditing: (State) -> T?,
    private val setEditing: (State, T?) -> Unit,
    private val origin: (T) -> Point,
    private val preview: (CanvasRenderingContext2D, Point, Point, State) -> Unit,
    private val create: (Point, Point, State) -> T
) : ShapeConfig() {
    override fun beginEdit(state: State, position: Point): Boolean {
        val existing = findAt(getItems(state), position) ?: return false
        setEditing(state, existing)
        val o = origin(existing)
        state.editOffset = Point(position.x - o.x, position.y - o.y)
        return true
    }

    override fun isEditing(state: State) = getEditing(state) != null
    override fun endEdit(state: State) = setEditing(state, null)
    override fun drawPreview(context: CanvasRenderingContext2D, start: Point, current: Point, state: State) =
        preview(context, start, current, state)

    override fun addItem(state: State, start: Point, end: Point) {
        getItems(state).add(create(start, end, state))
    }
}

val SHAPE_CONFIGS: Map<String, ShapeConfig> = mapOf(
    "arrow" to TypedShapeConfig<ArrowItem>(
        getItems = { it.arrowItems },
        findAt = { items, p -> findArrowAt(items, p) },
        getEditing = { it.editingArrow },
        setEditing = { s, v -> s.editingArrow = v },
        origin = { Point(it.startX, it.startY) },
        preview = { ctx, start, current, s -> drawArrow(ctx, start, current, s.selectedColor, s.lineWidth) },
        create = { start, end, s -> ArrowItem(start.x, start.y, end.x, end.y, s.selectedColor, s.lineWidth) }
    ),
    "circle" to TypedShapeConfig<CircleItem>(
        getItems = { it.circleItems },
        findAt = { items, p -> findCircleAt(items, p) },
        getEditing = { it.editingCircle },
        setEditing = { s, v -> s.editingCircle = v },
        origin = { Point(it.x, it.y) },
        preview = { ctx, start, current, s -> drawCircle(ctx, start, current, s.selectedColor, s.lineWidth) },
        create = { start, end, s ->
            val b = getBoundingBox(start, end)
            CircleItem(b.x, b.y, b.width, b.height, s.selectedColor, s.lineWidth)
        }
    ),
    "rectangle" to TypedShapeConfig<RectangleItem>(
        getItems = { it.rectangleItems },
        findAt = { items, p -> findRectangleAt(items, p) },
        getEditing = { it.editingRectangle },
        setEditing = { s, v -> s.editingRectangle = v },
        origin = { Point(it.x, it.y) },
        preview = { ctx, start, current, s -> drawRectangle(ctx, start, current, s.selectedColor, s.lineWidth) },
        create = { start, end, s ->
            val b = getBoundingBox(start, end)
            RectangleItem(b.x, b.y, b.width, b.height, s.selectedColor, s.lineWidth)
        }
    ),
    "polygon" to TypedShapeConfig<PolygonItem>(
        getItems = { it.polygonItems },
        findAt = { items, p -> findPolygonAt(items, p) },
        getEditing = { it.editingPolygon },
        setEditing = { s, v -> s.editingPolygon = v },
        origin = { Point(it.x, it.y) },
        preview = { ctx, start, current, s ->
            drawPolygon(ctx, start, current, s.polygonSides, s.selectedColor, s.lineWidth)
        },
        create = { start, end, s ->
            val b = getBoundingBox(start, end)
            PolygonItem(b.x, b.y, b.width, b.height, s.polygonSides, s.selectedColor, s.lineWidth)
        }
    )
)
