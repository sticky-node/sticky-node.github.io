const storageKey = "drawingCanvas";
const textStorageKey = "drawingCanvasText";
const rectangleStorageKey = "drawingCanvasRectangles";
const circleStorageKey = "drawingCanvasCircles";
const polygonStorageKey = "drawingCanvasPolygons";
const strokeStorageKey = "drawingCanvasStrokes";
const arrowStorageKey = "drawingCanvasArrows";

export function saveCanvas(canvas, stateOrText, rectangleItems, circleItems, polygonItems, strokeItems, arrowItems) {
  const {
    textItems = [],
    rectangleItems: rects = [],
    circleItems: circles = [],
    polygonItems: polys = [],
    strokeItems: strokes = [],
    arrowItems: arrows = []
  } = (stateOrText && !Array.isArray(stateOrText)) ? stateOrText : {
    textItems: stateOrText,
    rectangleItems,
    circleItems,
    polygonItems,
    strokeItems,
    arrowItems
  };

  localStorage.setItem(storageKey, canvas.toDataURL("image/png"));
  localStorage.setItem(textStorageKey, JSON.stringify(textItems));
  localStorage.setItem(rectangleStorageKey, JSON.stringify(rects));
  localStorage.setItem(circleStorageKey, JSON.stringify(circles));
  localStorage.setItem(polygonStorageKey, JSON.stringify(polys));
  localStorage.setItem(strokeStorageKey, JSON.stringify(strokes));
  localStorage.setItem(arrowStorageKey, JSON.stringify(arrows));
}

export function loadCanvas(canvas, context, stateOrText, rectangleItems, circleItems, polygonItems, strokeItems, arrowItems) {
  const {
    textItems = [],
    rectangleItems: rects = [],
    circleItems: circles = [],
    polygonItems: polys = [],
    strokeItems: strokes = [],
    arrowItems: arrows = []
  } = (stateOrText && !Array.isArray(stateOrText)) ? stateOrText : {
    textItems: stateOrText,
    rectangleItems,
    circleItems,
    polygonItems,
    strokeItems,
    arrowItems
  };

  const savedCircle = localStorage.getItem(circleStorageKey);
  if (savedCircle) {
    circles.push(...JSON.parse(savedCircle));
  }

  const savedPolygons = localStorage.getItem(polygonStorageKey);
  if (savedPolygons) {
    polys.push(...JSON.parse(savedPolygons));
  }

  const savedStrokes = localStorage.getItem(strokeStorageKey);
  if (savedStrokes) {
    strokes.push(...JSON.parse(savedStrokes));
  }

  const savedArrows = localStorage.getItem(arrowStorageKey);
  if (savedArrows) {
    arrows.push(...JSON.parse(savedArrows));
  }

  const savedText = localStorage.getItem(textStorageKey);
  if (savedText) {
    textItems.push(...JSON.parse(savedText));
  }

  const savedRectangles = localStorage.getItem(rectangleStorageKey);
  if (savedRectangles) {
    rects.push(...JSON.parse(savedRectangles));
  }

  const savedDrawing = localStorage.getItem(storageKey);
  if (!savedDrawing) return;

  const image = new Image();
  image.onload = () => context.drawImage(image, 0, 0);
  image.src = savedDrawing;
}

export function clearCanvas(canvas, context, stateOrText, rectangleItems, circleItems, polygonItems, strokeItems, arrowItems) {
  const {
    textItems = [],
    rectangleItems: rects = [],
    circleItems: circles = [],
    polygonItems: polys = [],
    strokeItems: strokes = [],
    arrowItems: arrows = []
  } = (stateOrText && !Array.isArray(stateOrText)) ? stateOrText : {
    textItems: stateOrText,
    rectangleItems,
    circleItems,
    polygonItems,
    strokeItems,
    arrowItems
  };

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "source-over";
  localStorage.removeItem(storageKey);
  localStorage.removeItem(textStorageKey);
  localStorage.removeItem(rectangleStorageKey);
  localStorage.removeItem(circleStorageKey);
  localStorage.removeItem(polygonStorageKey);
  localStorage.removeItem(strokeStorageKey);
  localStorage.removeItem(arrowStorageKey);
  textItems.length = 0;
  rects.length = 0;
  circles.length = 0;
  polys.length = 0;
  strokes.length = 0;
  arrows.length = 0;
}
