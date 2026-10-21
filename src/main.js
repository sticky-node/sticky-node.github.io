import "./style.css";
import { setupCanvasEvents } from "./canvas/events.js";
import { setupControls } from "./canvas/controls.js";
import { clearCanvas, loadCanvas, saveCanvas } from "./canvas/storage.js";

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
  editingCircle: null,
  editingRectangle: null,
  editOffset: null,
  lastPosition: null
};

const renderText = (textContext, textItems) => {
  textContext.font = "20px sans-serif";
  textContext.textBaseline = "top";

  textItems.forEach(({ text, x, y, color }) => {
    textContext.fillStyle = color;
    text.split("\n").forEach((line, index) => {
      textContext.fillText(line, x, y + index * 24);
    });
  });
};

const renderOverlay = (
  textContext,
  textItems,
  rectangleItems,
  circleItems
) => {
  textContext.clearRect(0, 0, textCanvas.width, textCanvas.height);
  rectangleItems.forEach(({ x, y, width, height, color }) => {
    textContext.strokeStyle = color;
    textContext.strokeRect(x, y, width, height);
  });
  circleItems.forEach(({ x, y, width, height, color }) => {
    textContext.strokeStyle = color;
    textContext.beginPath();
    textContext.ellipse(
      x + width / 2,
      y + height / 2,
      width / 2,
      height / 2,
      0,
      0,
      2 * Math.PI
    );
    textContext.stroke();
  });
  renderText(textContext, textItems);
};

loadCanvas(canvas, context, state.textItems, state.rectangleItems, state.circleItems);
renderOverlay(textContext, state.textItems, state.rectangleItems, state.circleItems);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  textCanvas.width = canvas.width;
  textCanvas.height = canvas.height;
  syncTextCanvasPosition();
  renderOverlay(textContext, state.textItems, state.rectangleItems, state.circleItems);
});

setupControls({
  state,
  clearCanvas: () => {
    clearCanvas(canvas, context, state.textItems, state.rectangleItems, state.circleItems);
    renderOverlay(textContext, state.textItems, state.rectangleItems, state.circleItems);
  }
});

setupCanvasEvents({
  canvas,
  context,
  state,
  textContext,
  renderOverlay,
  saveCanvas: () =>
    saveCanvas(canvas, state.textItems, state.rectangleItems, state.circleItems)
});