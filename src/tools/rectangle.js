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
