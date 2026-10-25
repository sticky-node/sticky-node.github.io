import { drawStoredPolygon } from "../../tools/polygon.js";
import { drawStoredCircle } from "../../tools/circle.js";
import { drawStoredRectangle } from "../../tools/rectangle.js";
import { drawStoredArrow } from "../../tools/arrow.js";
import { DEFAULT_FONT_SIZE, getLineHeight } from "../../tools/text.js";

function renderText(textContext, textItems) {
  textContext.textBaseline = "top";

  textItems.forEach(({ text, x, y, color, fontSize = DEFAULT_FONT_SIZE }) => {
    textContext.font = `${fontSize}px sans-serif`;
    textContext.fillStyle = color;
    const lineHeight = getLineHeight(fontSize);
    text.split("\n").forEach((line, index) => {
      textContext.fillText(line, x, y + index * lineHeight);
    });
  });
}

function renderStrokes(context, strokeItems) {
  strokeItems.forEach(({ points, color, lineWidth = 3 }) => {
    if (points.length < 2) return;

    context.globalCompositeOperation = "source-over";
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
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
  textItemsOrState,
  rectangleItems,
  circleItems,
  polygonItems,
  strokeItems,
  arrowItems
) {
  textContext.clearRect(0, 0, textContext.canvas.width, textContext.canvas.height);

  let textItems = textItemsOrState;
  if (textItemsOrState && !Array.isArray(textItemsOrState) && typeof textItemsOrState === "object") {
    ({
      textItems,
      rectangleItems,
      circleItems,
      polygonItems,
      strokeItems,
      arrowItems
    } = textItemsOrState);
  }

  renderStrokes(textContext, strokeItems || []);
  (rectangleItems || []).forEach((rectangle) => drawStoredRectangle(textContext, rectangle));
  (circleItems || []).forEach((circle) => drawStoredCircle(textContext, circle));
  (polygonItems || []).forEach((polygon) => drawStoredPolygon(textContext, polygon));
  (arrowItems || []).forEach((arrow) => drawStoredArrow(textContext, arrow));
  renderText(textContext, textItems || []);
}