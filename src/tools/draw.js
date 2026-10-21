export function startDrawing(context, position) {
  context.beginPath();
  context.moveTo(position.x, position.y);
}

export function drawStroke(context, position, color) {
  context.globalCompositeOperation = "source-over";
  context.strokeStyle = color;
  context.lineWidth = 3;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(position.x, position.y);
  context.stroke();
}
