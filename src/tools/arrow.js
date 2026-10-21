export function drawArrowLine(context, fromX, fromY, toX, toY, color, headLength = 16) {
  const angle = Math.atan2(toY - fromY, toX - fromX);

  context.strokeStyle = color;
  context.lineWidth = 3;
  context.lineCap = "round";
  context.lineJoin = "round";

  // Main stem line
  context.beginPath();
  context.moveTo(fromX, fromY);
  context.lineTo(toX, toY);
  context.stroke();

  // Open Chevron / ">" head at the end
  const arrowAngle = Math.PI / 6; // 30 degrees spread
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

export function drawArrow(context, startPosition, currentPosition, color) {
  context.globalCompositeOperation = "source-over";
  drawArrowLine(context, startPosition.x, startPosition.y, currentPosition.x, currentPosition.y, color);
}

export function drawStoredArrow(context, { startX, startY, endX, endY, color }) {
  drawArrowLine(context, startX, startY, endX, endY, color);
}