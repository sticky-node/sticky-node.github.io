import { drawRectangle } from "../../tools/rectangle.js";
import { drawCircle } from "../../tools/circle.js";
import { drawPolygon } from "../../tools/polygon.js";
import { findCircleAt, findRectangleAt } from "./hit-testing.js";

function takeCanvasSnapshot(canvas, context, state, position) {
  state.startPosition = position;
  state.lastPosition = position;
  state.canvasSnapshot = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );
}

function redrawShapes({ textContext, state, renderOverlay }) {
  renderOverlay(
    textContext,
    state.textItems,
    state.rectangleItems,
    state.circleItems,
    state.polygonItems
  );
}

export function handleShapeMouseDown({ canvas, context, position, state }) {
  if (state.tool !== "circle" && state.tool !== "rectangle" && state.tool !== "polygon") return false;

  const items = state.tool === "circle"
    ? state.circleItems
    : state.tool === "polygon" ? state.polygonItems : state.rectangleItems;
  const existingShape = state.tool === "circle"
    ? findCircleAt(items, position)
    : findRectangleAt(items, position);

  if (existingShape) {
    if (state.tool === "circle") {
      state.editingCircle = existingShape;
    } else if (state.tool === "polygon") {
      state.editingPolygon = existingShape;
    } else {
      state.editingRectangle = existingShape;
    }
    state.editOffset = {
      x: position.x - existingShape.x,
      y: position.y - existingShape.y
    };
    return true;
  }

  takeCanvasSnapshot(canvas, context, state, position);
  return true;
}

export function handleShapeMouseMove({ context, position, textContext, state, renderOverlay }) {
  if (state.tool === "circle" && state.startPosition) {
    context.putImageData(state.canvasSnapshot, 0, 0);
    drawCircle(context, state.startPosition, position, state.selectedColor);
    return true;
  }

  if (state.tool === "polygon" && state.startPosition) {
    context.putImageData(state.canvasSnapshot, 0, 0);
    drawPolygon(context, state.startPosition, position, state.polygonSides, state.selectedColor);
    return true;
  }

  if (state.editingCircle) {
    state.editingCircle.x = position.x - state.editOffset.x;
    state.editingCircle.y = position.y - state.editOffset.y;
    redrawShapes({ textContext, state, renderOverlay });
    return true;
  }

  if (state.editingPolygon) {
    state.editingPolygon.x = position.x - state.editOffset.x;
    state.editingPolygon.y = position.y - state.editOffset.y;
    redrawShapes({ textContext, state, renderOverlay });
    return true;
  }

  if (state.tool === "rectangle" && state.startPosition) {
    context.putImageData(state.canvasSnapshot, 0, 0);
    drawRectangle(context, state.startPosition, position, state.selectedColor);
    return true;
  }

  if (state.editingRectangle) {
    state.editingRectangle.x = position.x - state.editOffset.x;
    state.editingRectangle.y = position.y - state.editOffset.y;
    redrawShapes({ textContext, state, renderOverlay });
    return true;
  }

  return false;
}

export function handleShapeMouseUp({ context, textContext, state, saveCanvas, renderOverlay }) {
  if (state.tool === "circle") {
    if (state.editingCircle) {
      saveCanvas();
      state.editingCircle = null;
      state.editOffset = null;
      return true;
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
      redrawShapes({ textContext, state, renderOverlay });
      saveCanvas();
    }

    state.startPosition = null;
    state.canvasSnapshot = null;
    return true;
  }

  if (state.tool === "polygon") {
    if (state.editingPolygon) {
      saveCanvas();
      state.editingPolygon = null;
      state.editOffset = null;
      return true;
    }

    if (state.startPosition) {
      const endPosition = state.lastPosition;
      state.polygonItems.push({
        x: Math.min(state.startPosition.x, endPosition.x),
        y: Math.min(state.startPosition.y, endPosition.y),
        width: Math.abs(endPosition.x - state.startPosition.x),
        height: Math.abs(endPosition.y - state.startPosition.y),
        sides: state.polygonSides,
        color: state.selectedColor
      });
      context.putImageData(state.canvasSnapshot, 0, 0);
      redrawShapes({ textContext, state, renderOverlay });
      saveCanvas();
    }

    state.startPosition = null;
    state.canvasSnapshot = null;
    return true;
  }

  if (state.tool !== "rectangle") return false;

  if (state.editingRectangle) {
    saveCanvas();
    state.editingRectangle = null;
    state.editOffset = null;
    return true;
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
    redrawShapes({ textContext, state, renderOverlay });
    saveCanvas();
  }

  state.startPosition = null;
  state.canvasSnapshot = null;
  return true;
}