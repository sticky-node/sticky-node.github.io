package stickynode.editor

/** Undo/redo over serialized snapshots. The snapshot at [index] is always the current state. */
class History(initial: String, private val limit: Int = 100) {
    private val stack = ArrayDeque<String>().apply { addLast(initial) }
    private var index = 0

    /** Returns true if [snapshot] differs from the current state and was recorded. */
    fun record(snapshot: String): Boolean {
        if (snapshot == stack[index]) return false

        while (stack.size > index + 1) stack.removeLast()
        stack.addLast(snapshot)
        if (stack.size > limit) stack.removeFirst()
        index = stack.lastIndex
        return true
    }

    fun undo(): String? {
        if (index == 0) return null
        index -= 1
        return stack[index]
    }

    fun redo(): String? {
        if (index == stack.lastIndex) return null
        index += 1
        return stack[index]
    }
}
