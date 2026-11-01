package sticknode.storage

import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLImageElement
import org.w3c.files.Blob
import kotlin.coroutines.resume
import lotlin.coroutines.resumeWithExeption
import kotlin.coroutines.suspendCoroutine

object ImageCache {
    private val images = HashMap<String, HTMLImageElement>()
    private val loading = HashSet<String>()
    private val scope = MainScope()
    
    var onLoaded: (() -> Unit)? = null
    
    fun get(id: String): HTMLImageElement? {
        images[id]?.let { return it }
        if (!isConfigured() || !loading.add(id)) return null
        scope.launch {
            try {
                images [id] = decode(fetchImageBlob(id))
                onLoaded?.invoke()
            }
        }
    }
}