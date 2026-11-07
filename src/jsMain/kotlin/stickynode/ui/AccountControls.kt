package stickynode.ui

import kotlinx.browser.document
import kotlinx.browser.window
import stickynode.storage.Accounts

fun setupAccountControls() {
    val button = document.getElementById("accountButton")

    fun refresh() {
        button?.textContent = Accounts.active()?.let { "Account: ${it.name}" } ?: "Sign in"
    }
    refresh()

    onClick("accountButton") {
        try {
            val active = Accounts.active()
            val status = if (active != null) "Signed in as ${active.name}." else "Not signed in."
            val choice = window.prompt(
                "$status\n\n1 = Create account\n2 = Sign in with a token\n" +
                    "3 = Switch account\n4 = Sign out\n5 = Show my token",
                if (active == null) "1" else "5"
            )?.trim()

            when (choice) {
                "1" -> {
                    val name = window.prompt("New account name:")?.trim()
                    if (!name.isNullOrEmpty()) {
                        val account = Accounts.create(name)
                        window.prompt(
                            "Account created. Copy your token now; you need it to sign in on another device:",
                            account.token
                        )
                    }
                }
                "2" -> {
                    val name = window.prompt("Account name:")?.trim()
                    if (!name.isNullOrEmpty()) {
                        val token = window.prompt("Paste your token:")?.trim()
                        if (!token.isNullOrEmpty()) Accounts.signIn(name, token)
                    }
                }
                "3" -> {
                    val names = Accounts.all().map { it.name }
                    if (names.isEmpty()) {
                        window.alert("No accounts on this device yet.")
                    } else {
                        val name = window.prompt("Switch to:\n\n" + names.joinToString("\n"), names.first())?.trim()
                        if (!name.isNullOrEmpty()) Accounts.switchTo(name)
                    }
                }
                "4" -> Accounts.signOut()
                "5" -> if (active != null) window.prompt("Token for ${active.name}:", active.token)
                    else window.alert("Sign in first.")
                else -> Unit
            }
        } catch (error: Throwable) {
            window.alert(error.message ?: "Something went wrong")
        }
        refresh()
    }
}