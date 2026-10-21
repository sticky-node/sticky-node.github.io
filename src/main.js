import "./style.css";
import { setupCanvasEvents } from "./canvas/events.js";
import { setupControls } from "./canvas/controls.js";
import { clearCanvas, loadCanvas, saveCanvas } from "./canvas/storage.js";
import { renderOverlay } from "./canvas/render/render.js";

const canvas = document.getElementById("drawingcanvas");
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
  polygonSides: 5,
  currentStroke: null,
  editingStroke: null,
  editingCircle: null,
  editingRectangle: null,
  editingPolygon: null,
  editingText: null,
  editOffset: null,
  lastPosition: null,
};

loadCanvas(canvas, context, state);
renderOverlay(textContext, state);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  textCanvas.width = canvas.width;
  textCanvas.height = canvas.height;
  syncTextCanvasPosition();
  renderOverlay(textContext, state);
});

setupControls({
  state,
  clearCanvas: () => {
    clearCanvas(canvas, context, state);
    renderOverlay(textContext, state);
  }
});

setupCanvasEvents({
  canvas,
  context,
  state,
  textContext,
  renderOverlay,
  saveCanvas: () => saveCanvas(canvas, state)
});
