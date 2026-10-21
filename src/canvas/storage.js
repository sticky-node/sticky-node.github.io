const storageKey = "drawingCanvas";
const textStorageKey = "drawingCanvasText";
const rectangleStorageKey = "drawingCanvasRectangles";
const circleStorageKey = "drawingCanvasCircles";
const polygonStorageKey = "drawingCanvasPolygons";
const strokeStorageKey = "drawingCanvasStrokes";

export function saveCanvas(canvas, textItems, rectangleItems, circleItems, polygonItems, strokeItems) {
  localStorage.setItem(storageKey, canvas.toDataURL("image/png"));
  localStorage.setItem(textStorageKey, JSON.stringify(textItems));
  localStorage.setItem(rectangleStorageKey, JSON.stringify(rectangleItems));
  localStorage.setItem(circleStorageKey, JSON.stringify(circleItems));
  localStorage.setItem(polygonStorageKey, JSON.stringify(polygonItems));
  localStorage.setItem(strokeStorageKey, JSON.stringify(strokeItems));
}

export function loadCanvas(canvas, context, textItems, rectangleItems, circleItems, polygonItems, strokeItems) {
  const savedCircle = localStorage.getItem(circleStorageKey);
  if (savedCircle) {
    circleItems.push(...JSON.parse(savedCircle));
  }

  const savedPolygons = localStorage.getItem(polygonStorageKey);
  if (savedPolygons) {
    polygonItems.push(...JSON.parse(savedPolygons));
  }

  const savedStrokes = localStorage.getItem(strokeStorageKey);
  if (savedStrokes) {
    strokeItems.push(...JSON.parse(savedStrokes));
  }

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

export function clearCanvas(canvas, context, textItems, rectangleItems, circleItems, polygonItems, strokeItems) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "source-over";
  localStorage.removeItem(storageKey);
  localStorage.removeItem(textStorageKey);
  localStorage.removeItem(rectangleStorageKey);
  localStorage.removeItem(circleStorageKey);
  localStorage.removeItem(polygonStorageKey);
  localStorage.removeItem(strokeStorageKey);
  textItems.length = 0;
  rectangleItems.length = 0;
  circleItems.length = 0; 
  polygonItems.length = 0;
  strokeItems.length = 0;
}
