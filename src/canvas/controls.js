export function setupControls({ state, clearCanvas }) {
  const clearButton = document.getElementById("clearButton");
  const rectangleButton = document.getElementById("rectangleButton");
  const colorPicker = document.getElementById("colorPicker");
  const eraserButton = document.getElementById("eraserButton");
  const textButton = document.getElementById("textButton");
  const circleButton = document.getElementById("circleButton");

  clearButton.addEventListener("click", clearCanvas);

  rectangleButton.addEventListener("click", () => {
    state.tool = "rectangle";
    state.erasing = false;
  });

  colorPicker.addEventListener("input", () => {
    state.selectedColor = colorPicker.value;
  });

  eraserButton.addEventListener("click", () => {
    state.tool = "draw";
    state.erasing = !state.erasing;
    eraserButton.textContent = state.erasing
      ? "Eraser: On"
      : "Eraser: Off";
  });

  textButton.addEventListener("click", () => {
    state.tool = "text";
    state.erasing = false;
  });

  circleButton.addEventListener("click", () => {
    state.tool = "circle";
    state.erasing = false;
  });
}
