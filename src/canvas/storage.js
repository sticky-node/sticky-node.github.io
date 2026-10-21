const storageKey = "drawingCanvas";
const textStorageKey = "drawingCanvasText";

export function saveCanvas(canvas, textItems) {
  localStorage.setItem(storageKey, canvas.toDataURL("image/png"));
  localStorage.setItem(textStorageKey, JSON.stringify(textItems));
}

export function loadCanvas(canvas, context, textItems) {
  const savedText = localStorage.getItem(textStorageKey);
  if (savedText) {
    textItems.push(...JSON.parse(savedText));
  }

  const savedDrawing = localStorage.getItem(storageKey);
  if (!savedDrawing) return;

  const image = new Image();
  image.onload = () => context.drawImage(image, 0, 0);
  image.src = savedDrawing;
}

export function clearCanvas(canvas, context, textItems) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "source-over";
  localStorage.removeItem(storageKey);
  localStorage.removeItem(textStorageKey);
  textItems.length = 0;
}
