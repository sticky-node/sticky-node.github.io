package stickynode.editor

import kotlinx.browser.document
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import stickynode.model.Point
import stickynode.model.RegionFillItem

/**
 * Finds the empty area around [p], bounded by whatever is drawn. Returns runs (y, xStart, xEnd)
 * or null if the click is on a line or the area isn't closed (it reaches the canvas edge).
 */
fun findEnclosedRegion(ed: Editor, p: Point): List<Int>? {
    val w = ed.canvas.width
    val h = ed.canvas.height
    val sx = p.x.toInt()
    val sy = p.y.toInt()
    if (p.x < 0 || p.y < 0 || sx >= w || sy >= h) return null

    // Draw everything except earlier region fills onto a transparent offscreen canvas.
    val off = document.createElement("canvas") as HTMLCanvasElement
    off.width = w
    off.height = h
    val ctx = off.getContext("2d") as CanvasRenderingContext2D
    for (item in ed.items) {
        if (item is RegionFillItem) continue
        ctx.save()
        item.draw(ctx)
        ctx.restore()
    }

    // Any pixel with some ink on it is a wall.
    val data = ctx.getImageData(0.0, 0.0, w.toDouble(), h.toDouble()).data.asDynamic()
    val blocked = BooleanArray(w * h)
    for (i in 0 until w * h) blocked[i] = (data[i * 4 + 3] as Int) != 0

    if (blocked[sy * w + sx]) return null

    val runs = ArrayList<Int>()
    val stack = ArrayDeque<Int>()
    stack.addLast(sy * w + sx)

    while (stack.isNotEmpty()) {
        val idx = stack.removeLast()
        if (blocked[idx]) continue
        val y = idx / w
        val x = idx % w

        var left = x
        while (left > 0 && !blocked[y * w + left - 1]) left--
        var right = x
        while (right < w - 1 && !blocked[y * w + right + 1]) right++

        // Touching the canvas edge means the shape isn't closed.
        if (left == 0 || right == w - 1 || y == 0 || y == h - 1) return null

        for (xx in left..right) blocked[y * w + xx] = true
        runs.add(y)
        runs.add(left)
        runs.add(right + 1)

        for (ny in intArrayOf(y - 1, y + 1)) {
            var inSpan = false
            for (xx in left..right) {
                val open = !blocked[ny * w + xx]
                if (open && !inSpan) {
                    stack.addLast(ny * w + xx)
                    inSpan = true
                } else if (!open) {
                    inSpan = false
                }
            }
        }
    }
    return runs
}