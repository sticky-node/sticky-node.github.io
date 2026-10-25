import { createTextBox } from "../../tools/text.js";
import { findTextAt } from "./hit-testing.js";

function openNewTextBox({ canvas, position, textContext, state, saveCanvas, renderOverlay }) {
  if (document.querySelector("textarea.sticky-node-textbox")) return;

  createTextBox({
    canvas,
    position,
    color: state.selectedColor,
    fontSize: state.fontSize,
    onCommit: (updatedText) => {
      state.textItems.push(updatedText);
      renderOverlay(textContext, state);
      saveCanvas();
    }
  });
}

export function handleTextMouseDown({ event, canvas, position, textContext, state, saveCanvas, renderOverlay }) {
  if (state.tool !== "text") return false;

  event.preventDefault();
  const existingText = findTextAt(textContext, state.textItems, position);

  if (event.button === 0) {
    if (existingText) {
      state.editingText = existingText;
      state.pendingTextPosition = null;
      state.editOffset = {
        x: position.x - existingText.x,
        y: position.y - existingText.y
      };
      return true;
    }

    state.pendingTextPosition = position;
    return true;
  }

  if (event.button !== 2) return true;

  if (!existingText) return true;

  createTextBox({
    canvas,
    position: { x: existingText.x, y: existingText.y },
    color: state.selectedColor,
    fontSize: state.fontSize,
    textItem: existingText,
    onCommit: (updatedText) => {
      Object.assign(existingText, updatedText);
      renderOverlay(textContext, state);
      saveCanvas();
    }
  });
  return true;
}

export function handleTextMouseMove({ position, textContext, state, renderOverlay }) {
  if (state.pendingTextPosition) return true;

  if (!state.editingText) return false;

  state.editingText.x = position.x - state.editOffset.x;
  state.editingText.y = position.y - state.editOffset.y;
  renderOverlay(textContext, state);
  return true;
}

export function handleTextMouseUp({ canvas, textContext, state, saveCanvas, renderOverlay }) {
  if (state.tool !== "text") return false;

  if (state.editingText) {
    saveCanvas();
    state.editingText = null;
    state.editOffset = null;
    return true;
  }

  if (state.pendingTextPosition) {
    const position = state.pendingTextPosition;
    state.pendingTextPosition = null;
    openNewTextBox({ canvas, position, textContext, state, saveCanvas, renderOverlay });
  }

  return true;
}
