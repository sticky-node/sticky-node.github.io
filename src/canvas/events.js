import { eraseStroke } from "../tools/eraser.js";
import { startDrawing, drawStroke } from "../tools/draw.js";
import { drawRectangle } from "../tools/rectangle.js";
import { getMousePosition } from "./coordinates.js";
import { createTextBox } from "../tools/text.js";

export function setupCanvasEvents({
  canvas,
  context,
  textContext,
  state,
  saveCanvas,
  renderText
}) {
  canvas.addEventListener("mousedown", (event) => {
    const position = getMousePosition(canvas, event);

    if (state.tool === "text") {
      event.preventDefault();

      const existingText = [...state.textItems].reverse().find((textItem) => {
        const lines = textItem.text.split("\n");
        const width = Math.max(
          ...lines.map((line) => textContext.measureText(line).width),
          1
        );
        const height = lines.length * 24;

        return (
          position.x >= textItem.x &&
          position.x <= textItem.x + width &&
          position.y >= textItem.y &&
          position.y <= textItem.y + height
        );
      });

      createTextBox({
        canvas,
        position: existingText
          ? { x: existingText.x, y: existingText.y }
          : position,
        color: state.selectedColor,
        textItem: existingText,
        onCommit: (updatedText) => {
          if (existingText) {
            Object.assign(existingText, updatedText);
          } else {
            state.textItems.push(updatedText);
          }
          renderText(textContext, state.textItems);
          saveCanvas();
        }
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
