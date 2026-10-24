export function drawRectangle(context, startPosition, currentPosition, color, lineWidth = 3) {
  context.globalCompositeOperation = "source-over";
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.strokeRect(
    startPosition.x,
    startPosition.y,
    currentPosition.x - startPosition.x,
    currentPosition.y - startPosition.y
  );
}

export function drawStoredRectangle(context, { x, y, width, height, lineWidth = 3 }) {
  context.globalCompositeOperation = "source-over";
  context.strokeWidth = lineWidth;
  context.strokeStyle = color;
  context.strokeRect(x, y, width, height);
}
