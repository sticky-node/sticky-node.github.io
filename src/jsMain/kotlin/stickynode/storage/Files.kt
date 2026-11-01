package stickynode.storage

import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.await
import org.w3c.dom.HTMLAnchorElement
import org.w3c.dom.HTMLInputElement
import org.w3c.files.Blob
import org.w3c.files.BlobPropertyBag
import org.w3c.files.File
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine
import kotlin.js.Promise

/** Saves [content] using the File System Access API when available, otherwise as a normal download. */
suspend fun saveToFile(content: String, suggestedName: String = "drawing.sticky.json") {
    if (window.asDynamic().showSaveFilePicker != undefined) {
        try {
            val accept = js("({})")
            accept["application/json"] = arrayOf(".json")
            val type = js("({})")
            type.description = "Sticky Node drawing"
            type.accept = accept
            val options = js("({})")
            options.suggestedName = suggestedName
            options.types = arrayOf(type)

            val handle = window.asDynamic().showSaveFilePicker(options).unsafeCast<Promise<dynamic>>().await()
            val writable = handle.createWritable().unsafeCast<Promise<dynamic>>().await()
            writable.write(content).unsafeCast<Promise<dynamic>>().await()
            writable.close().unsafeCast<Promise<dynamic>>().await()
        } catch (error: Throwable) {
            // Closing the picker without choosing a file isn't an error.
            if (error.asDynamic().name != "AbortError") throw error
        }
        return
    }

    val blob = Blob(arrayOf<dynamic>(content), BlobPropertyBag(type = "application/json"))
    val url = window.asDynamic().URL.createObjectURL(blob).unsafeCast<String>()
    val link = document.createElement("a") as HTMLAnchorElement
    link.href = url
    link.download = suggestedName
    document.body!!.appendChild(link)
    link.click()
    link.remove()
    window.setTimeout({ window.asDynamic().URL.revokeObjectURL(url); Unit }, 1000)
}

suspend fun pickFileText(): String? {
    val file = pickFile(".json,application/json") ?: return null
    return file.asDynamic().text().unsafeCast<Promise<String>>().await()
}

suspend fun pickImageFile(): File? = pickFile("image/png,image/jpeg,image/gif,image/webp")

private suspend fun pickFile(accept: String): File? = suspendCoroutine { continuation ->
    val input = document.createElement("input") as HTMLInputElement
    input.type = "file"
    input.accept = accept
    input.addEventListener("change", { continuation.resume(input.files?.item(0)) })
    input.addEventListener("cancel", { continuation.resume(null) })
    input.click()
}
