import { eraseStroke } from "../tools/eraser.js";
import { startDrawing, drawStroke } from "../tools/draw.js";
import { drawRectangle } from "../tools/rectangle.js";
import { getMousePosition } from "./coordinates.js";
import { createTextBox } from "../tools/text.js";

export function setupCanvasEvents({ canvas, context, state, saveCanvas }) {
  canvas.addEventListener("mousedown", (event) => {
    const position = getMousePosition(canvas, event);

    if (state.tool === "text") {
      event.preventDefault();

      console.log("text tool activated", position);

      createTextBox({
        canvas,
        context,
        position,
        color: state.selectedColor,
        saveCanvas
      });
      return;
    }

    if (state.tool === "rectangle") {
      state.startPosition = position;
      state.canvasSnapshot = context.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
      return;
    }

    state.drawing = true;
    startDrawing(context, position);
  });

  canvas.addEventListener("mousemove", (event) => {
    const position = getMousePosition(canvas, event);

    if (state.tool === "rectangle" && state.startPosition) {
      context.putImageData(state.canvasSnapshot, 0, 0);
      drawRectangle(
        context,
        state.startPosition,
        position,
        state.selectedColor
      );
      return;
    }

    if (!state.drawing) return;

    if (state.erasing) {
      eraseStroke(context, position);
    } else {
      drawStroke(context, position, state.selectedColor);
    }
  });

  canvas.addEventListener("mouseup", () => {
    if (state.tool === "rectangle") {
      if (state.startPosition) saveCanvas();
      state.startPosition = null;
      state.canvasSnapshot = null;
      return;
    }

    state.drawing = false;
    saveCanvas();
  });

  canvas.addEventListener("mouseleave", () => {
    if (state.drawing) saveCanvas();
    state.drawing = false;
  });
}
