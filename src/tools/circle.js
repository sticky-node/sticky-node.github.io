export function drawCircle(context, startPosition, currentPosition, color, lineWidth = 3) {
  const x = Math.min(startPosition.x, currentPosition.x);
  const y = Math.min(startPosition.y, currentPosition.y);
  const width = Math.abs(currentPosition.x - startPosition.x);
  const height = Math.abs(currentPosition.y - startPosition.y);

  drawStoredCircle(context, { x, y, width, height, color, lineWidth });
}

export function drawStoredCircle(context, { x, y, width, height, color, lineWidth = 3, fill }) {
  context.globalCompositeOperation = "source-over";
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.beginPath();
  context.ellipse(
    x + width / 2,
    y + height / 2,
    width / 2,
    height / 2,
    0,
    0,
    2 * Math.PI
  );
  if (fill) {
    context.fillStyle = fill;
    context.fill();
  }
  context.stroke();
}