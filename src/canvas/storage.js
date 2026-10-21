const storageKey = "drawingCanvas";

export function saveCanvas(canvas) {
  localStorage.setItem(storageKey, canvas.toDataURL("image/png"));
}

export function loadCanvas(canvas, context) {
  const savedDrawing = localStorage.getItem(storageKey);
  if (!savedDrawing) return;

  const image = new Image();
  image.onload = () => context.drawImage(image, 0, 0);
  image.src = savedDrawing;
}

export function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "source-over";
  localStorage.removeItem(storageKey);
}
