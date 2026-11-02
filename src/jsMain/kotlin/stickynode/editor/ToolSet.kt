package stickynode.editor

import stickynode.model.ArrowItem
import stickynode.model.CircleItem
import stickynode.model.PolygonItem
import stickynode.model.RectangleItem
import stickynode.model.boundingBox

class ToolSet {
    val freehand = FreehandTool()
    val eraser = EraserTool()
    val text = TextTool()
    val fill = FillTool()

    val rectangle = ShapeTool(owns = { it is RectangleItem }) { ed, start, end ->
        val box = boundingBox(start, end)
        RectangleItem(box.x, box.y, box.width, box.height, ed.color, ed.lineWidth)
    }

    val circle = ShapeTool(owns = { it is CircleItem }) { ed, start, end ->
        val box = boundingBox(start, end)
        CircleItem(box.x, box.y, box.width, box.height, ed.color, ed.lineWidth)
    }

    val polygon = ShapeTool(owns = { it is PolygonItem }) { ed, start, end ->
        val box = boundingBox(start, end)
        PolygonItem(box.x, box.y, box.width, box.height, ed.polygonSides, ed.color, ed.lineWidth)
    }

    val arrow = ShapeTool(owns = { it is ArrowItem }) { ed, start, end ->
        ArrowItem(start.x, start.y, end.x, end.y, ed.color, ed.lineWidth)
    }
}
