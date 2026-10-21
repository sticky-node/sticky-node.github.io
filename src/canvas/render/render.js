import { drawStoredPolygon } from "../../tools/polygon.js";

function renderText(textContext, textItems) {
  textContext.font = "20px sans-serif";
  textContext.textBaseline = "top";

  textItems.forEach(({ text, x, y, color }) => {
    textContext.fillStyle = color;
    text.split("\n").forEach((line, index) => {
      textContext.fillText(line, x, y + index * 24);
    });
  });
}

export function renderOverlay(
  textContext,
  textItems,
  rectangleItems,
  circleItems,
  polygonItems
) {
  textContext.clearRect(0, 0, textContext.canvas.width, textContext.canvas.height);

  rectangleItems.forEach(({ x, y, width, height, color }) => {
    textContext.strokeStyle = color;
    textContext.strokeRect(x, y, width, height);
  });

  circleItems.forEach(({ x, y, width, height, color }) => {
    textContext.strokeStyle = color;
    textContext.beginPath();
    textContext.ellipse(
      x + width / 2,
      y + height / 2,
      width / 2,
      height / 2,
      0,
      0,
      2 * Math.PI
    );
    textContext.stroke();
  });

  polygonItems.forEach((polygon) => drawStoredPolygon(textContext, polygon));

  renderText(textContext, textItems);
}