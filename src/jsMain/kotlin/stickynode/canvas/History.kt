package stickynode.canvas

private const val MAX_HISTORY = 100

class History(private val state: State) {
    private fun serialize(): String = json.encodeToString(
        Items.serializer(),
        Items(
            state.strokeItems, state.textItems, state.rectangleItems,
            state.circleItems, state.polygonItems, state.arrowItems
        )
    )

    private var stack = mutableListOf(serialize())
    private var index = 0

    private fun restore(snapshot: String) {
        val data = json.decodeFromString(Items.serializer(), snapshot)
        state.strokeItems.clear(); state.strokeItems.addAll(data.strokeItems)
        state.textItems.clear(); state.textItems.addAll(data.textItems)
        state.rectangleItems.clear(); state.rectangleItems.addAll(data.rectangleItems)
        state.circleItems.clear(); state.circleItems.addAll(data.circleItems)
        state.polygonItems.clear(); state.polygonItems.addAll(data.polygonItems)
        state.arrowItems.clear(); state.arrowItems.addAll(data.arrowItems)
    }

    fun record(): Boolean {
        val snapshot = serialize()
        if (snapshot == stack[index]) return false

        stack = stack.subList(0, index + 1).toMutableList()
        stack.add(snapshot)
        if (stack.size > MAX_HISTORY) stack.removeAt(0)
        index = stack.size - 1
        return true
    }

    fun undo(): Boolean {
        if (index == 0) return false
        index -= 1
        restore(stack[index])
        return true
    }

    fun redo(): Boolean {
        if (index == stack.size - 1) return false
        index += 1
        restore(stack[index])
        return true
    }
}
