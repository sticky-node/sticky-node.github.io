import "./style.css";
import { setupCanvasEvents } from "./canvas/events.js";
import { setupControls } from "./canvas/controls.js";
import { clearCanvas, loadCanvas, saveCanvas } from "./canvas/storage.js";

const canvas = document.getElementById("drawingcanvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const state = {
  tool: "draw",
  selectedColor: "#000000",
  erasing: false,
  drawing: false,
  startPosition: null,
  canvasSnapshot: null
};

loadCanvas(canvas, context);

setupControls({
  state,
  clearCanvas: () => clearCanvas(canvas, context)
});

setupCanvasEvents({
  canvas,
  context,
  state,
  saveCanvas: () => saveCanvas(canvas)
});