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
  const undoButton = document.getElementById("undoButton");
  const redoButton = document.getElementById("redoButton");

  clearButton.addEventListener("click", clearCanvas);
  undoButton?.addEventListener("click", undo);
  redoButton?.addEventListener("click", redo);

  document.addEventListener("keydown", (event) => {
    const tag = event.target.tagName;
    if (tag === "TEXTAREA" || tag === "INPUT") return;

    const mod = event.ctrlKey || event.metaKey;
    if (!mod) return;

    const key = event.key.toLowerCase();
    if (key === "z" && !event.shiftKey) {
      event.preventDefault();
      undo();
    } else if ((key === "z" && event.shiftKey) || key === "y") {
      event.preventDefault();
      redo();
    }
  });
  
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
}
