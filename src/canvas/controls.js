export function setupControls({ state, clearCanvas, undo, redo }) {
  const clearButton = document.getElementById("clearButton");
  const drawButton = document.getElementById("drawButton");
  const rectangleButton = document.getElementById("rectangleButton");
  const colorPicker = document.getElementById("colorPicker");
  const eraserButton = document.getElementById("eraserButton");
  const textButton = document.getElementById("textButton");
  const circleButton = document.getElementById("circleButton");
  const arrowButton = document.getElementById("arrowButton");
  const polygonButton = document.getElementById("polygonButton");
  const polygonSidesInput = document.getElementById("polygonSidesInput");

  clearButton.addEventListener("click", clearCanvas);

  if (drawButton) {
    drawButton.addEventListener("click", () => {
      state.tool = "draw";
      state.erasing = false;
      if (eraserButton) {
        eraserButton.textContent = "Eraser: Off";
      }
    });
  }

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

  if (arrowButton) {
    arrowButton.addEventListener("click", () => {
      state.tool = "arrow";
      state.erasing = false;
    });
  }

  polygonButton.addEventListener("click", () => {
    const sides = Number.parseInt(polygonSidesInput.value, 10);
    if (!Number.isInteger(sides) || sides < 3) return;

    state.polygonSides = sides;
    state.tool = "polygon";
    state.erasing = false;
  });

  // Undo / redo
  document.getElementById("undoButton")?.addEventListener("click", undo);
  document.getElementById("redoButton")?.addEventListener("click", redo);

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping =
      target.tagName === "TEXTAREA" ||
      (target.tagName === "INPUT" && target.type !== "color");
    if (isTyping) return;
    if (!(event.ctrlKey || event.metaKey)) return;

    const key = event.key.toLowerCase();
    if (key === "z" && !event.shiftKey) {
      event.preventDefault();
      undo();
    } else if ((key === "z" && event.shiftKey) || key === "y") {
      event.preventDefault();
      redo();
    }
  });
}