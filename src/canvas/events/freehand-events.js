import { eraseAt } from "../../tools/eraser.js";
import { findStrokeAt } from "./hit-testing.js";

export function handleFreehandMouseDown({ position, textContext, state, saveCanvas, renderOverlay }) {
  if (state.erasing) {
    state.drawing = true;
    const removed = eraseAt(state, position, textContext);
    if (removed) {
      renderOverlay(textContext, state);
      saveCanvas();
    }
    return;
  }

  const existingStroke = findStrokeAt(state.strokeItems, position);
  if (existingStroke) {
    state.editingStroke = existingStroke;
    state.editOffset = {
      x: position.x - existingStroke.points[0].x,
      y: position.y - existingStroke.points[0].y
    };
    return;
  }

  state.currentStroke = {
    points: [position],
    color: state.selectedColor,
    lineWidth: state.lineWidth
  };
  state.strokeItems.push(state.currentStroke);
  renderOverlay(textContext, state);
}

export function handleFreehandMouseMove({ position, textContext, state, saveCanvas, renderOverlay }) {
  if (state.erasing && state.drawing) {
    const removed = eraseAt(state, position, textContext);
    if (removed) {
      renderOverlay(textContext, state);
      saveCanvas();
    }
    return;
  }

  if (state.editingStroke) {
    const firstPoint = state.editingStroke.points[0];
    const deltaX = position.x - state.editOffset.x - firstPoint.x;
    const deltaY = position.y - state.editOffset.y - firstPoint.y;

    state.editingStroke.points = state.editingStroke.points.map((point) => ({
      x: point.x + deltaX,
      y: point.y + deltaY
    }));
    renderOverlay(textContext, state);
    return;
  }

  if (!state.erasing && state.currentStroke) {
    state.currentStroke.points.push(position);
    renderOverlay(textContext, state);
    return;
  }
}

export function handleFreehandMouseUp({ state, saveCanvas }) {
  if (state.editingStroke) {
    saveCanvas();
    state.editingStroke = null;
    state.editOffset = null;
    return;
  }

  if (state.currentStroke) {
    if (state.currentStroke.points.length < 2) state.strokeItems.pop();
    saveCanvas();
    state.currentStroke = null;
    return;
  }

  state.drawing = false;
}

export function handleFreehandMouseLeave({ state, saveCanvas }) {
  if (state.currentStroke && state.currentStroke.points.length < 2) {
    state.strokeItems.pop();
  }
  if (state.drawing || state.currentStroke || state.editingStroke) saveCanvas();
  state.drawing = false;
  state.currentStroke = null;
  state.editingStroke = null;
  state.editOffset = null;
}