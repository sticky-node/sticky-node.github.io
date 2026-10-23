const ITEM_KEYS = [
    "strokeItems",
    "textItems",
    "rectangleItems",
    "circleItems",
    "polygonItems",
    "arrowItems",
];

const MAX_HISTORY = 100;

export function createHistory(state) {
    const serialize = () =>
        JSON.stringify(Object.fromEntries(ITEM_KEYS.map(key => [key, state[key]])))

    let stack = [serialize()];
    let index = 0;

    function restore(snapshot) {
        const data = JSON.parse(snapshot);
        ITEM_KEYS.forEach((key) => {
            state[key].length = 0;
            state[key].push(...data[key]);
        })
    }

return {
    record() {
        const snapshot = serialize();
        if (snapshot === stack[index]) return false;

        stack = stack.slice(0, index + 1);
        stack.push(snapshot);
        if (stack.length > MAX_HISTORY) stack.shift();
        index = stack.length - 1;
        return true;
    },

    undo() {
        if (index === 0) return false;
        index -= 1;
        restore(stack[index]);
        return true;
    },

    redo() {
        if (index === stack.length - 1) return false;
        index += 1;
        restore(stack[index]);
        return true;
    },
};
}