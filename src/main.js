import { createHistory } from "./canvas/history.js"

const context = canvas.getContext("2d");
const textCanvas = document.createElement("canvas");
const textContext = textCanvas.getContext("2d");
textCanvas.id = "textcanvas";
canvas.after(textCanvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
textCanvas.width = canvas.width;
textCanvas.height = canvas.height;
const syncTextCanvasPosition = () => {
  textCanvas.style.top = `${canvas.offsetTop}px`;
};
syncTextCanvasPosition();

const state = {
  tool: "draw",
  selectedColor: "#000000",
  erasing: false,
  drawing: false,
  startPosition: null,
  canvasSnapshot: null,
  strokeItems: [],
  textItems: [],
  rectangleItems: [],
  circleItems: [],
  polygonItems: [],
  arrowItems: [],
  polygonSides: 5,
  currentStroke: null,
  editingStroke: null,
  editingCircle: null,
  editingRectangle: null,
  editingPolygon: null,
  editingArrow: null,
  editingText: null,
  editOffset: null,
  lastPosition: null,
  // Undo/redo history stacks
  undoStack: [],
  redoStack: [],
};

loadCanvas(canvas, context, state);
renderOverlay(textContext, state);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  textCanvas.width = canvas.width;
  textCanvas.height = canvas.height;
  syncTextCanvasPosition();
  renderOverlay(textContext, state);

const history = createHistory(state);

const persist = () => saveCanvas(canvas, state);

const commit = () => {
  persist();
  history.record();
};

const isBusy = () =>
  state.startPosition || state.currentStroke || state.editingStroke ||
  state.editingCircle || state.editingRectangle || state.editingPolygon ||
  state.editingArrow || state.editingText;

const applyHistory = (action) => {
  if (isBusy()) return;
  if (action()) {
    renderOverlay(textContext, state);
    persist();
  }
};

const undo = () => applyHistory(history.undo);
const redo = () => applyHistory(history.redo);

setupControls({
  state,
  clearCanvas: () => {
    clearCanvas(canvas, context, state);
    renderOverlay(textContext, state);
    history.record();
  }
});

setupCanvasEvents({
  canvas,
  context,
  state,
  textContext,
  renderOverlay,
  saveCanvas: commit,
});

