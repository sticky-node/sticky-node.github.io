const storageKey = "drawingCanvas";
const textStorageKey = "drawingCanvasText";
const rectangleStorageKey = "drawingCanvasRectangles";

export function saveCanvas(canvas, textItems, rectangleItems) {
  localStorage.setItem(storageKey, canvas.toDataURL("image/png"));
  localStorage.setItem(textStorageKey, JSON.stringify(textItems));
  localStorage.setItem(rectangleStorageKey, JSON.stringify(rectangleItems));
}

export function loadCanvas(canvas, context, textItems, rectangleItems) {
  const savedText = localStorage.getItem(textStorageKey);
  if (savedText) {
    textItems.push(...JSON.parse(savedText));
  }

  const savedRectangles = localStorage.getItem(rectangleStorageKey);
  if (savedRectangles) {
    rectangleItems.push(...JSON.parse(savedRectangles));
  }

  const savedDrawing = localStorage.getItem(storageKey);
  if (!savedDrawing) return;

  const image = new Image();
  image.onload = () => context.drawImage(image, 0, 0);
  image.src = savedDrawing;
}

export function clearCanvas(canvas, context, textItems, rectangleItems) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "source-over";
  localStorage.removeItem(storageKey);
  localStorage.removeItem(textStorageKey);
  localStorage.removeItem(rectangleStorageKey);
  textItems.length = 0;
  rectangleItems.length = 0;
}
