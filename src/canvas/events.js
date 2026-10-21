import { getMousePosition } from "./coordinates.js";
import {
  handleFreehandMouseDown,
  handleFreehandMouseMove,
  handleFreehandMouseUp,
  handleFreehandMouseLeave
} from "./events/freehand-events.js";
import {
  handleShapeMouseDown,
  handleShapeMouseMove,
  handleShapeMouseUp
} from "./events/shape-events.js";
import {
  handleTextMouseDown,
  handleTextMouseMove,
  handleTextMouseUp
} from "./events/text-events.js";

export function setupCanvasEvents({
  canvas,
  context,
  textContext,
  state,
  saveCanvas,
  renderOverlay
}) {
  const sharedHandlers = {
    canvas,
    context,
    textContext,
    state,
    saveCanvas,
    renderOverlay
  };

  canvas.addEventListener("contextmenu", (event) => {
    if (state.tool === "text") event.preventDefault();
  });

  canvas.addEventListener("mousedown", (event) => {
    const position = getMousePosition(canvas, event);

    if (state.erasing) {
      handleFreehandMouseDown({ ...sharedHandlers, position });
      return;
    }

    if (handleTextMouseDown({ ...sharedHandlers, event, position })) return;
    if (handleShapeMouseDown({ ...sharedHandlers, position })) return;

    handleFreehandMouseDown({ ...sharedHandlers, position });
  });

  canvas.addEventListener("mousemove", (event) => {
    const position = getMousePosition(canvas, event);
    state.lastPosition = position;

    if (state.erasing) {
      handleFreehandMouseMove({ ...sharedHandlers, position });
      return;
    }

    if (handleTextMouseMove({ ...sharedHandlers, position })) return;
    if (handleShapeMouseMove({ ...sharedHandlers, position })) return;

    handleFreehandMouseMove({ ...sharedHandlers, position });
  });

  canvas.addEventListener("mouseup", () => {
    if (state.erasing) {
      handleFreehandMouseUp(sharedHandlers);
      return;
    }

    if (handleTextMouseUp(sharedHandlers)) return;
    if (handleShapeMouseUp(sharedHandlers)) return;

    handleFreehandMouseUp(sharedHandlers);
  });

  canvas.addEventListener("mouseleave", () => {
    handleFreehandMouseLeave(sharedHandlers);
  });
}
