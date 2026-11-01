package stickynode.storage

import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLImageElement
import org.w3c.files.Blob
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import kotlin.coroutines.suspendCoroutine

object ImageCache {
    private val images = HashMap<String, HTMLImageElement>()
    private val loading = HashSet<String>()
    private val scope = MainScope()

    /** Called when an image finishes loading so the canvas can redraw. */
    var onLoaded: (() -> Unit)? = null

    /** Returns the image if it's ready; otherwise starts loading it (once) and returns null. */
    fun get(id: String): HTMLImageElement? {
        images[id]?.let { return it }
        if (!isConfigured() || !loading.add(id)) return null
        scope.launch {
            try {
                images[id] = decode(fetchImageBlob(id))
                onLoaded?.invoke()
            } catch (error: Throwable) {
                console.warn("Couldn't load image $id", error)
            }
        }
        return null
    }

    /** Registers a just-uploaded local file so it shows instantly. */
    suspend fun add(id: String, file: Blob): HTMLImageElement =
        decode(file).also { images[id] = it }

    private suspend fun decode(blob: Blob): HTMLImageElement = suspendCoroutine { c ->
        val url = window.asDynamic().URL.createObjectURL(blob).unsafeCast<String>()
        val img = document.createElement("img") as HTMLImageElement
        img.addEventListener("load", {
            window.asDynamic().URL.revokeObjectURL(url)
            c.resume(img)
        })
        img.addEventListener("error", {
            window.asDynamic().URL.revokeObjectURL(url)
            c.resumeWithException(IllegalStateException("Not a readable image"))
        })
        img.src = url
    }
}