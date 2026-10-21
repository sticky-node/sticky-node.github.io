import { createTextBox } from "../../tools/text.js";
import { findTextAt } from "./hit-testing.js";

function redrawTextOverlay({ textContext, state, renderOverlay }) {
  renderOverlay(
    textContext,
    state.textItems,
    state.rectangleItems,
    state.circleItems
  );
}

export function handleTextMouseDown({ event, canvas, position, textContext, state, saveCanvas, renderOverlay }) {
  if (state.tool !== "text") return false;

  const existingText = findTextAt(textContext, state.textItems, position);

  if (event.button === 0) {
    if (existingText) {
      state.editingText = existingText;
      state.textEditOffset = {
        x: position.x - existingText.x,
        y: position.y - existingText.y
      };
      return true;
    }

    createTextBox({
      canvas,
      position,
      color: state.selectedColor,
      onCommit: (updatedText) => {
        state.textItems.push(updatedText);
        redrawTextOverlay({ textContext, state, renderOverlay });
        saveCanvas();
      }
    });
    return true;
  }

  if (event.button !== 2) return true;

  event.preventDefault();
  if (!existingText) return true;

  createTextBox({
    canvas,
    position: { x: existingText.x, y: existingText.y },
    color: state.selectedColor,
    textItem: existingText,
    onCommit: (updatedText) => {
      Object.assign(existingText, updatedText);
      redrawTextOverlay({ textContext, state, renderOverlay });
      saveCanvas();
    }
  });
  return true;
}

export function handleTextMouseMove({ position, textContext, state, renderOverlay }) {
  if (!state.editingText) return false;

  state.editingText.x = position.x - state.textEditOffset.x;
  state.editingText.y = position.y - state.textEditOffset.y;
  redrawTextOverlay({ textContext, state, renderOverlay });
  return true;
}

export function handleTextMouseUp({ state, saveCanvas }) {
  if (state.tool !== "text") return false;

  if (state.editingText) {
    saveCanvas();
    state.editingText = null;
    state.textEditOffset = null;
  }
  return true;
}