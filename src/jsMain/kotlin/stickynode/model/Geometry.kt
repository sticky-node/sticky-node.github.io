package stickynode.model

import kotlinx.serialization.Serializable
import kotlin.math.abs
import kotlin.math.hypot
import kotlin.math.min

@Serializable
data class Point(val x: Double, val y: Double) {
    fun distanceTo(other: Point): Double = hypot(x - other.x, y - other.y)
}

class BoundingBox(val x: Double, val y: Double, val width: Double, val height: Double)

fun boundingBox(a: Point, b: Point) = BoundingBox(
    x = min(a.x, b.x),
    y = min(a.y, b.y),
    width = abs(b.x - a.x),
    height = abs(b.y - a.y)
)

/** Shortest distance from [p] to the line segment [a]–[b]. */
fun distanceToSegment(p: Point, a: Point, b: Point): Double {
    val dx = b.x - a.x
    val dy = b.y - a.y
    val lengthSquared = dx * dx + dy * dy
    if (lengthSquared == 0.0) return p.distanceTo(a)

    val t = (((p.x - a.x) * dx + (p.y - a.y) * dy) / lengthSquared).coerceIn(0.0, 1.0)
    return hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy))
}

fun pointInPolygon(p: Point, polygon: List<Point>): Boolean {   // 'Point', not 'point'
    var inside = false
    var previous = polygon.lastIndex
    for (i in polygon.indices) {                                  // 'indices', not 'lastIndex'
        val a = polygon[i]
        val b = polygon[previous]
        if ((a.y > p.y) != (b.y > p.y) &&
            p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x
        ) {
            inside = !inside
        }
        previous = i
    }
    return inside
}