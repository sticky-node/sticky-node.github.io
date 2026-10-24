const KEYS = [
    "strokeItems", "textItems", "rectangleItems",
    "circleItems", "polygonItems", "arrowItems"
];

export function serialize(state) {
    const doc = { app: "sticky-node", version: 1 };
    KEYS.forEach((key) => (doc[key] = state[key]));
    return JSON.stringify(doc, null, 2);
}

export function applyDocument(state, json) {
    if (!json.trim()) throw new Error("The file is empty");
    const doc = JSON.parse(json);
    if (doc.app !== "sticky-node") throw new Error("Not a Sticky Node file");
    
    KEYS.forEach((key) => {
        state[key].length = 0;
        state[key].push(...(doc[key] ?? []));
    });
}

export async function saveToFile(state, suggestedName = "drawing.sticky.json") {
    const json = serialize(state);

    if (window.showSaveFilePicker) {
        try {
            const handle = await window.showSaveFilePicker({
                suggestedName,
                types: [{
                    description: "Sticky Node drawing",
                    accept: { "application/json": [".json"] },
                }]
            })
            const writable = await handle.createWritable();
            await writable.write(json);
            await writable.close();
        } catch (error) {
            if (error.name !== "AbortError") throw error;
        }
        return;
    }

    const url = URL.createObjectURL(new Blob([json], { type:"application/json"}));
    const link = document.createElement("a");
    link.href = url;
    link.download = suggestedName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function openFromFile(state) {
    return new Promise((resolve) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json,application/json";
        input.onchange = async () => {
            const file = input.files[0];
            if (!file) return resolve(false);
            try {
                applyDocument(state, await file.text());
                resolve(true);
            } catch (error) {
                alert("Couldn't open that file: " + error.message);
                resolve(false);
            }
        };
        input.click();
    });
}