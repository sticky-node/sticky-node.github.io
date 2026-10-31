package stickynode.storage

import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
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

private fun ensureConfigured(): Boolean =
    (localStorage.getItem(URL_KEY) != null && localStorage.getItem(TOKEN_KEY) != null) || configureServer()

private suspend fun request(path: String, method: String = "GET", body: String? = null): String {
    if (!ensureConfigured()) throw IllegalStateException("Server not configured")
    val base = localStorage.getItem(URL_KEY)
    val token = localStorage.getItem(TOKEN_KEY)

    val headers = js("({})")
    headers["Authorization"] = "Bearer $token"
    val options = js("({})")
    options.method = method
    options.headers = headers
    if (body != null) {
        headers["Content-Type"] = "text/plain"
        options.body = body
    }

    val response = window.asDynamic().fetch(base + path, options).unsafeCast<Promise<dynamic>>().await()
    if (response.ok != true) {
        if (response.status == 401) throw IllegalStateException("Wrong token (use Server Settings)")
        throw IllegalStateException("Server error ${response.status}")
    }
    return response.text().unsafeCast<Promise<String>>().await()
}

private fun encode(name: String): String = js("encodeURIComponent")(name).unsafeCast<String>()

suspend fun listServerDrawings(): List<String> =
    Json.decodeFromString(request("/api/drawings"))

suspend fun loadFromServer(name: String): String =
    request("/api/drawings/${encode(name)}")

suspend fun saveToServer(name: String, content: String) {
    request("/api/drawings/${encode(name)}", "PUT", content)
}