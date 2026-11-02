package stickynode.storage

import kotlinx.serialization.json.Json

suspend fun listServerDrawings(): List<String> =
    Json.decodeFromString(request("/api/drawings"))

suspend fun loadFromServer(name: String): String =
    request("/api/drawings/${encodePathSegment(name)}")

suspend fun saveToServer(name: String, content: String) {
    request("/api/drawings/${encodePathSegment(name)}", "PUT", content)
}
