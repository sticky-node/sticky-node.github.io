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

function renderStrokes(context, strokeItems) {
  strokeItems.forEach(({ points, color }) => {
    if (points.length < 2) return;

    context.strokeStyle = color;
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);

    points.slice(1).forEach((point) => {
      context.lineTo(point.x, point.y);
    });

    context.stroke();
  });
}

export function renderOverlay(
  textContext,
  textItems,
  rectangleItems,
  circleItems,
  polygonItems,
  strokeItems
) {
  textContext.clearRect(0, 0, textContext.canvas.width, textContext.canvas.height);

  renderStrokes(textContext, strokeItems);

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