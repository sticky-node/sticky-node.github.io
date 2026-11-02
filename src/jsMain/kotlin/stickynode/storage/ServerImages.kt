package stickynode.storage

import org.w3c.files.Blob
import org.w3c.files.File
import kotlin.js.Promise

suspend fun uploadImage(id: String, file: File) {
    sendAndRead<Unit>("/api/images/${encodePathSegment(id)}", "PUT", file, file.type) {
        Promise.resolve(Unit)
    }
}

suspend fun fetchImageBlob(id: String): Blob =
    sendAndRead("/api/images/${encodePathSegment(id)}") { it.blob().unsafeCast<Promise<Blob>>() }
