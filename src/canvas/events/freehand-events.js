import { eraseStroke } from "../../tools/eraser.js";
import { findStrokeAt } from "./hit-testing.js";

function redraw({ textContext, state, renderOverlay }) {
  renderOverlay(
    textContext,
    state.textItems,
    state.rectangleItems,
    state.circleItems,
    state.polygonItems,
    state.strokeItems
  );
}

export function handleFreehandMouseDown({ context, position, textContext, state, renderOverlay }) {
  if (!state.erasing) {
    const existingStroke = findStrokeAt(state.strokeItems, position);
    if (existingStroke) {
      state.editingStroke = existingStroke;
      state.strokeEditOffset = {
        x: position.x - existingStroke.points[0].x,
        y: position.y - existingStroke.points[0].y
      };
      return;
    }

    state.currentStroke = {
      points: [position],
      color: state.selectedColor
    };
    state.strokeItems.push(state.currentStroke);
    redraw({ textContext, state, renderOverlay });
    return;
  }

  state.drawing = true;
  context.beginPath();
  context.moveTo(position.x, position.y);
}

export function handleFreehandMouseMove({ context, position, textContext, state, renderOverlay }) {
  if (state.editingStroke) {
    const firstPoint = state.editingStroke.points[0];
    const deltaX = position.x - state.strokeEditOffset.x - firstPoint.x;
    const deltaY = position.y - state.strokeEditOffset.y - firstPoint.y;

    state.editingStroke.points = state.editingStroke.points.map((point) => ({
      x: point.x + deltaX,
      y: point.y + deltaY
    }));
    redraw({ textContext, state, renderOverlay });
    return;
  }

  if (!state.erasing && state.currentStroke) {
    state.currentStroke.points.push(position);
    redraw({ textContext, state, renderOverlay });
    return;
  }

  if (!state.drawing) return;

  if (state.erasing) {
    eraseStroke(context, position);
  }
}

export function handleFreehandMouseUp({ state, saveCanvas }) {
  if (state.editingStroke) {
    saveCanvas();
    state.editingStroke = null;
    state.strokeEditOffset = null;
    return;
  }

  if (state.currentStroke) {
    saveCanvas();
    state.currentStroke = null;
    return;
  }

  state.drawing = false;
  saveCanvas();
}

export function handleFreehandMouseLeave({ state, saveCanvas }) {
  if (state.drawing || state.currentStroke || state.editingStroke) saveCanvas();
  state.drawing = false;
  state.currentStroke = null;
  state.editingStroke = null;
  state.strokeEditOffset = null;
}