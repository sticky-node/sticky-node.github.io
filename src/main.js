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
  textItems: [],
  rectangleItems: [],
  circleItems: [],
  polygonItems: [],
  polygonSides: 5,
  editingCircle: null,
  editingRectangle: null,
  editingPolygon: null,
  editOffset: null,
  lastPosition: null,
  editingText: null,
  textEditOffset: null,
};

loadCanvas(canvas, context, state.textItems, state.rectangleItems, state.circleItems, state.polygonItems);
renderOverlay(textContext, state.textItems, state.rectangleItems, state.circleItems, state.polygonItems);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  textCanvas.width = canvas.width;
  textCanvas.height = canvas.height;
  syncTextCanvasPosition();
  renderOverlay(textContext, state.textItems, state.rectangleItems, state.circleItems, state.polygonItems);
});

setupControls({
  state,
  clearCanvas: () => {
    clearCanvas(canvas, context, state.textItems, state.rectangleItems, state.circleItems, state.polygonItems);
    renderOverlay(textContext, state.textItems, state.rectangleItems, state.circleItems, state.polygonItems);
  }
});

setupCanvasEvents({
  canvas,
  context,
  state,
  textContext,
  renderOverlay,
  saveCanvas: () =>
    saveCanvas(canvas, state.textItems, state.rectangleItems, state.circleItems, state.polygonItems)
});
