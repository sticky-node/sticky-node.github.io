export function drawPolygon(context, startPosition, currentPosition, sides, color, lineWidth = 3) {
  const x = Math.min(startPosition.x, currentPosition.x);
  const y = Math.min(startPosition.y, currentPosition.y);
  const width = Math.abs(currentPosition.x - startPosition.x);
  const height = Math.abs(currentPosition.y - startPosition.y);

  drawStoredPolygon(context, { x, y, width, height, sides, color, lineWidth });
}

export function drawStoredPolygon(context, { x, y, width, height, sides, color, lineWidth = 3, fill }) {
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  const radius = Math.min(width, height) / 2;
  const angleStep = (Math.PI * 2) / sides;

  context.globalCompositeOperation = "source-over";
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.beginPath();

  for (let index = 0; index < sides; index += 1) {
    const angle = -Math.PI / 2 + index * angleStep;
    const pointX = centerX + radius * Math.cos(angle);
    const pointY = centerY + radius * Math.sin(angle);

    if (index === 0) {
      context.moveTo(pointX, pointY);
    } else {
      context.lineTo(pointX, pointY);
    }
  }

  context.closePath();
  if (fill) {
    context.fillStyle = fill;
    context.fill();
  }
  context.stroke();
}