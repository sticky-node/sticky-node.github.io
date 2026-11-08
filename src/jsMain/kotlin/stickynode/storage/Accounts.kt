package stickynode.storage

import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.json.Json
import org.khronos.webgl.Uint8Array
import org.khronos.webgl.get

@Serializable
class Account(val name: String, val token: String)

/** Local accounts: a name plus a random token, with one account active at a time. */
object Accounts {
    private const val LIST_KEY = "stickyNode.accounts"
    private const val ACTIVE_KEY = "stickyNode.activeAccount"

    private val validName = Regex("^[\\w\\- ]{1,64}$")
    private val validToken = Regex("^[A-Za-z0-9_\\-]{16,128}$")
    private val listSerializer = ListSerializer(Account.serializer())

    fun all(): List<Account> = try {
        localStorage.getItem(LIST_KEY)
            ?.let { Json.decodeFromString(listSerializer, it) }
            ?: emptyList()
    } catch (error: Throwable) {
        emptyList()
    }

    private fun saveAll(accounts: List<Account>) =
        localStorage.setItem(LIST_KEY, Json.encodeToString(listSerializer, accounts))

    fun active(): Account? {
        val name = localStorage.getItem(ACTIVE_KEY) ?: return null
        return all().firstOrNull { it.name == name }
    }

    /** 32 random bytes as 64 hex characters. */
    fun generateToken(): String {
        val bytes = Uint8Array(32)
        window.asDynamic().crypto.getRandomValues(bytes)
        return (0 until 32).joinToString("") { (bytes[it].toInt() and 0xFF).toString(16).padStart(2, '0') }
    }

    /** Creates an account with a fresh token and signs in to it. */
    fun create(name: String): Account {
        require(validName.matches(name)) { "Use 1-64 letters, numbers, spaces, - or _" }
        require(all().none { it.name == name }) { "An account called \"$name\" already exists here" }
        val account = Account(name, generateToken())
        saveAll(all() + account)
        localStorage.setItem(ACTIVE_KEY, name)
        return account
    }

    /** Signs in with an existing token (e.g. one created on another device). */
    fun signIn(name: String, token: String): Account {
        require(validName.matches(name)) { "Use 1-64 letters, numbers, spaces, - or _" }
        require(validToken.matches(token)) { "That doesn't look like a valid token" }
        val account = Account(name, token)
        saveAll(all().filter { it.name != name } + account)
        localStorage.setItem(ACTIVE_KEY, name)
        return account
    }

    fun switchTo(name: String) {
        require(all().any { it.name == name }) { "No account called \"$name\"" }
        localStorage.setItem(ACTIVE_KEY, name)
    }

    fun signOut() = localStorage.removeItem(ACTIVE_KEY)
}