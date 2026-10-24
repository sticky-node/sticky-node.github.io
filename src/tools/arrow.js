export function drawArrowLine(context, fromX, fromY, toX, toY, color, lineWidth = 3) {
  const headLength = Math.max(16, lineWidth * 4);
  const angle = Math.atan2(toY - fromY, toX - fromX);

  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.lineCap = "round";
  context.lineJoin = "round";

  context.beginPath();
  context.moveTo(fromX, fromY);
  context.lineTo(toX, toY);
  context.stroke();

  const arrowAngle = Math.PI / 6;
  context.beginPath();
  context.moveTo(
    toX - headLength * Math.cos(angle - arrowAngle),
    toY - headLength * Math.sin(angle - arrowAngle)
  );
  context.lineTo(toX, toY);
  context.lineTo(
    toX - headLength * Math.cos(angle + arrowAngle),
    toY - headLength * Math.sin(angle + arrowAngle)
  );
  context.stroke();
}

export function drawArrow(context, startPosition, currentPosition, color, lineWidth = 3) {
  context.globalCompositeOperation = "source-over";
  drawArrowLine(context, startPosition.x, startPosition.y, currentPosition.x, currentPosition.y, color, lineWidth);
}

export function drawStoredArrow(context, { startX, startY, endX, endY, color, lineWidth = 3 }) {
  drawArrowLine(context, startX, startY, endX, endY, color, lineWidth);
}