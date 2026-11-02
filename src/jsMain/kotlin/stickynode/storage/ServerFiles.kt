package stickynode.storage

import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.w3c.files.Blob
import org.w3c.files.File
import kotlin.js.Promise

private const val URL_KEY = "stickyNode.serverUrl"
private const val TOKEN_KEY = "stickyNode.serverToken"

/** Asks for the server address and token. Returns false if the user cancels. */
fun configureServer(): Boolean {
    val currentUrl = localStorage.getItem(URL_KEY) ?: "https://table.tail964c8c.ts.net"
    val url = window.prompt("Server URL:", currentUrl)
        ?.trim()?.trimEnd('/') ?: return false
    val token = window.prompt("Server token:", localStorage.getItem(TOKEN_KEY) ?: "")
        ?.trim() ?: return false
    localStorage.setItem(URL_KEY, url)
    localStorage.setItem(TOKEN_KEY, token)
    return true
}

fun isConfigured(): Boolean =
    localStorage.getItem(URL_KEY) != null && localStorage.getItem(TOKEN_KEY) != null

private fun ensureConfigured(): Boolean = isConfigured() || configureServer()

/**
 * Sends a request, checks the status, then reads the body with [read] while still inside this
 * function, so the fetch Response object is never returned across a suspend boundary.
 */
private suspend fun <T> sendAndRead(
    path: String,
    method: String = "GET",
    body: dynamic = null,
    contentType: String? = null,
    read: (dynamic) -> Promise<T>
): T {
    if (!ensureConfigured()) throw IllegalStateException("Server not configured")
    val base = localStorage.getItem(URL_KEY)
    val token = localStorage.getItem(TOKEN_KEY)

    val headers = js("({})")
    headers["Authorization"] = "Bearer $token"
    val options = js("({})")
    options.method = method
    options.headers = headers
    if (body != null) {
        if (contentType != null) headers["Content-Type"] = contentType
        options.body = body
    }

    val response = window.asDynamic().fetch(base + path, options).unsafeCast<Promise<dynamic>>().await()
    if (response.ok != true) {
        if (response.status == 401) throw IllegalStateException("Wrong token (use Server Settings)")
        throw IllegalStateException("Server error ${response.status}")
    }
    return read(response).await()
}

private suspend fun request(path: String, method: String = "GET", body: String? = null): String =
    sendAndRead(path, method, body, "text/plain") { it.text().unsafeCast<Promise<String>>() }

private fun encode(name: String): String = js("encodeURIComponent")(name).unsafeCast<String>()

suspend fun listServerDrawings(): List<String> =
    Json.decodeFromString(request("/api/drawings"))

suspend fun loadFromServer(name: String): String =
    request("/api/drawings/${encode(name)}")

suspend fun saveToServer(name: String, content: String) {
    request("/api/drawings/${encode(name)}", "PUT", content)
}

suspend fun uploadImage(id: String, file: File) {
    sendAndRead<Unit>("/api/images/${encode(id)}", "PUT", file, file.type) {
        Promise.resolve(Unit)
    }
}

suspend fun fetchImageBlob(id: String): Blob =
    sendAndRead("/api/images/${encode(id)}") { it.blob().unsafeCast<Promise<Blob>>() }