package stickynode.ui

import kotlinx.browser.document
import kotlinx.browser.window
import stickynode.storage.Accounts

fun setupAccountControls() {
    val button = document.getElementById("accountButton")
    
    fun refresh() {
        button?.textContent = Accounts.active()?.let { "Account: ${it.name}" }
    }
    refresh()
    
    onClick("accountButton") {
        try {
            val active = Accounts.active()
            val status = if (active != null) "Signed in as $"
        }
    }
}