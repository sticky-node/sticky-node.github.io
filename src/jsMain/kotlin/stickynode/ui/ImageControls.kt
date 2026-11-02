package stickynode.ui

import kotlinx.browser.window
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import stickynode.editor.Editor
import stickynode.model.ImageItem
import stickynode.storage.ImageCache
import stickynode.storage.pickImageFile
import stickynode.storage.uploadImage
import kotlin.math.min
import kotlin.random.Random

fun setupImageControls(editor: Editor, scope: CoroutineScope) {
    onClick("addImageButton") {
        scope.launch {
            try {
                val file = pickImageFile() ?: return@launch
                val ext = when (file.type) {
                    "image/png" -> "png"
                    "image/jpeg" -> "jpg"
                    "image/gif" -> "gif"
                    "image/webp" -> "webp"
                    else -> throw IllegalArgumentException("Use a PNG, JPEG, GIF or WebP image")
                }
                if (file.size.toDouble() > 20 * 1024 * 1024) {
                    throw IllegalArgumentException("Image is larger than 20 MB")
                }

                val id = "${(Random.nextLong() ushr 1).toString(36)}.$ext"
                uploadImage(id, file)
                val img = ImageCache.add(id, file)
                val scale = min(1.0, 400.0 / maxOf(img.naturalWidth, img.naturalHeight))
                val w = img.naturalWidth * scale
                val h = img.naturalHeight * scale
                editor.items.add(
                    ImageItem((editor.canvas.width - w) / 2, (editor.canvas.height - h) / 2, w, h, id)
                )
                editor.render()
                editor.commit()
            } catch (error: Throwable) {
                window.alert("Couldn't add the image: ${error.message}")
            }
        }
    }
}
