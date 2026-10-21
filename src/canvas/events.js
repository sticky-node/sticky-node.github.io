import { eraseStroke } from "../tools/eraser.js";
import { startDrawing, drawStroke } from "../tools/draw.js";
import { drawRectangle } from "../tools/rectangle.js";
import { getMousePosition } from "./coordinates.js";
import { createTextBox } from "../tools/text.js";
import { drawCircle } from "../tools/circle.js";

export function setupCanvasEvents({
  canvas,
  context,
  textContext,
  state,
  saveCanvas,
  renderOverlay
}) {
  canvas.addEventListener("mousedown", (event) => {
    const position = getMousePosition(canvas, event);

    if (state.tool === "circle") {
      const existingCircle = [...state.circleItems]
        .reverse()
        .find(
          ({ x, y, width, height }) => {
            const centerX = x + width / 2;
            const centerY = y + height / 2;
            const radiusX = width / 2;
            const radiusY = height / 2;

            if (radiusX === 0 || radiusY === 0) return false;

            const normalizedX = (position.x - centerX) / radiusX;
            const normalizedY = (position.y - centerY) / radiusY;

            return normalizedX ** 2 + normalizedY ** 2 <= 1;
          });

      if (existingCircle) {
        state.editingCircle = existingCircle;
        state.editOffset = {
          x: position.x - existingCircle.x,
          y: position.y - existingCircle.y
        };
        return;
      }

      state.startPosition = position;
      state.lastPosition = position;
      state.canvasSnapshot = context.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
      return;
    }

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
          renderOverlay(
            textContext,
            state.textItems,
            state.rectangleItems,
            state.circleItems
          );
          saveCanvas();
        }
      });
      return;
    }

    if (state.tool === "rectangle") {
      const existingRectangle = [...state.rectangleItems]
        .reverse()
        .find(
          ({ x, y, width, height }) =>
            position.x >= x &&
            position.x <= x + width &&
            position.y >= y &&
            position.y <= y + height
        );

      if (existingRectangle) {
        state.editingRectangle = existingRectangle;
        state.editOffset = {
          x: position.x - existingRectangle.x,
          y: position.y - existingRectangle.y
        };
        return;
      }

      state.startPosition = position;
      state.lastPosition = position;
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
    state.lastPosition = position;

    if (state.tool === "circle" && state.startPosition) {
      context.putImageData(state.canvasSnapshot, 0, 0);
      drawCircle(
        context,
        state.startPosition,
        position,
        state.selectedColor
      );
      return;
    }

    if (state.editingCircle) {
      state.editingCircle.x = position.x - state.editOffset.x;
      state.editingCircle.y = position.y - state.editOffset.y;
      renderOverlay(
        textContext,
        state.textItems,
        state.rectangleItems,
        state.circleItems
      );
      return;
    }

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

    if (state.editingRectangle) {
      state.editingRectangle.x = position.x - state.editOffset.x;
      state.editingRectangle.y = position.y - state.editOffset.y;
      renderOverlay(textContext, state.textItems, state.rectangleItems);
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
    if (state.tool === "circle") {
      if (state.editingCircle) {
        saveCanvas();
        state.editingCircle = null;
        state.editOffset = null;
        return;
      }

      if (state.startPosition) {
        const endPosition = state.lastPosition;

        state.circleItems.push({
          x: Math.min(state.startPosition.x, endPosition.x),
          y: Math.min(state.startPosition.y, endPosition.y),
          width: Math.abs(endPosition.x - state.startPosition.x),
          height: Math.abs(endPosition.y - state.startPosition.y),
          color: state.selectedColor
        });

        context.putImageData(state.canvasSnapshot, 0, 0);
        renderOverlay(
          textContext,
          state.textItems,
          state.rectangleItems,
          state.circleItems
        );
        saveCanvas();
      }

      state.startPosition = null;
      state.canvasSnapshot = null;
      return;
    }

    if (state.tool === "rectangle") {
      if (state.editingRectangle) {
        saveCanvas();
        state.editingRectangle = null;
        state.editOffset = null;
        return;
      }

      if (state.startPosition) {
        const endPosition = state.lastPosition;
        state.rectangleItems.push({
          x: Math.min(state.startPosition.x, endPosition.x),
          y: Math.min(state.startPosition.y, endPosition.y),
          width: Math.abs(endPosition.x - state.startPosition.x),
          height: Math.abs(endPosition.y - state.startPosition.y),
          color: state.selectedColor
        });
        context.putImageData(state.canvasSnapshot, 0, 0);
        renderOverlay(textContext, state.textItems, state.rectangleItems);
        saveCanvas();
      }
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
