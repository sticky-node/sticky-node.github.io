import { SHAPE_CONFIGS } from "./shape-definitions.js";

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

export function handleShapeMouseDown({ canvas, context, position, state }) {
  const config = SHAPE_CONFIGS[state.tool];
  if (!config) return false;

  const items = config.getItems(state);
  const existingShape = config.findAt(items, position);

  if (existingShape) {
    state[config.editingKey] = existingShape;
    state.editOffset = {
      x: position.x - (existingShape.startX ?? existingShape.x),
      y: position.y - (existingShape.startY ?? existingShape.y)
    };
    return true;
  }

  takeCanvasSnapshot(canvas, context, state, position);
  return true;
}

export function handleShapeMouseMove({ context, position, textContext, state, renderOverlay }) {
  const config = SHAPE_CONFIGS[state.tool];

  if (config && state.startPosition) {
    context.putImageData(state.canvasSnapshot, 0, 0);
    config.drawPreview(context, state.startPosition, position, state);
    return true;
  }

  if (state.editingArrow) {
    const arrow = state.editingArrow;
    const dx = arrow.endX - arrow.startX;
    const dy = arrow.endY - arrow.startY;
    const newStartX = position.x - state.editOffset.x;
    const newStartY = position.y - state.editOffset.y;
    arrow.startX = newStartX;
    arrow.startY = newStartY;
    arrow.endX = newStartX + dx;
    arrow.endY = newStartY + dy;
    renderOverlay(textContext, state);
    return true;
  }

  const activeEditingKey = ["editingCircle", "editingRectangle", "editingPolygon"].find(
    (key) => state[key]
  );

  if (activeEditingKey) {
    const editingShape = state[activeEditingKey];
    editingShape.x = position.x - state.editOffset.x;
    editingShape.y = position.y - state.editOffset.y;
    renderOverlay(textContext, state);
    return true;
  }

  return false;
}

export function handleShapeMouseUp({ context, textContext, state, saveCanvas, renderOverlay }) {
  const config = SHAPE_CONFIGS[state.tool];
  if (!config) return false;

  const activeEditingKey = config.editingKey;
  if (state[activeEditingKey]) {
    saveCanvas();
    state[activeEditingKey] = null;
    state.editOffset = null;
    return true;
  }

  if (state.startPosition) {
    const endPosition = state.lastPosition;
    const moved =
      Math.hypot(endPosition.x - state.startPosition.x, endPosition.y - state.startPosition.y) > 3;

    if (moved) {
      config.getItems(state).push(config.createItem(state.startPosition, endPosition, state));
    }
    context.putImageData(state.canvasSnapshot, 0, 0);
    renderOverlay(textContext, state);
    saveCanvas();
  }

  state.startPosition = null;
  state.canvasSnapshot = null;
  return true;
}