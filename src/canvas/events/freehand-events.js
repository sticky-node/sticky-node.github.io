import { eraseStroke } from "../../tools/eraser.js";
import { startDrawing, drawStroke } from "../../tools/draw.js";

export function handleFreehandMouseDown({ context, position, state }) {
  state.drawing = true;
  startDrawing(context, position);
}

export function handleFreehandMouseMove({ context, position, state }) {
  if (!state.drawing) return;

  if (state.erasing) {
    eraseStroke(context, position);
  } else {
    drawStroke(context, position, state.selectedColor);
  }
}

export function handleFreehandMouseUp({ state, saveCanvas }) {
  state.drawing = false;
  saveCanvas();
}

export function handleFreehandMouseLeave({ state, saveCanvas }) {
  if (state.drawing) saveCanvas();
  state.drawing = false;
}