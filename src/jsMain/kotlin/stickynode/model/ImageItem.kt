package stickynode.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import org.w3c.dom.CanvasRenderingContext2D
import stickynode.storage.ImageCache

@Serializable
@SerialName("image")
class ImageItem(
    override var x: Double,
    override var y: Double,
    override val width: Double,
    override val height: Double,
    val imageId: String
) : Item(), Boxed {
    override fun draw(ctx: CanvasRenderingContext2D) {
        val img = ImageCache.get(imageId)
        if (img != null) {
            ctx.drawImage(img, x, y, width, height)
        } else {
            ctx.strokeStyle = "#999999"
            ctx.lineWidth = 1.0
            ctx.strokeRect(x, y, width, height)
            ctx.fillStyle = "#999999"
            ctx.font = "14px sans-serif"
            ctx.asDynamic().textBaseline = "top"
            ctx.fillText("Loading image...", x + 8, y + 8)
        }
    }

    override fun hitTest(p: Point) = p.x in x..(x + width) && p.y in y..(y + height)

    override fun moveBy(dx: Double, dy: Double) {
        x += dx
        y += dy
    }
}
