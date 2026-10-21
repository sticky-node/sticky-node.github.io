export function drawRectangle(context, startPosition, currentPosition, color) {
  context.globalCompositeOperation = "source-over";
  context.strokeStyle = color;
  context.lineWidth = 3;
  context.strokeRect(
    startPosition.x,
    startPosition.y,
    currentPosition.x - startPosition.x,
    currentPosition.y - startPosition.y
  );
}

export function drawStoredRectangle(context, { x, y, width, height, color }) {
  context.strokeStyle = color;
  context.strokeRect(x, y, width, height);
}
