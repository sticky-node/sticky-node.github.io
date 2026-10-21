export function eraseStroke(context, position) {
  context.globalCompositeOperation = "destination-out";
  context.lineWidth = 25;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(position.x, position.y);
  context.stroke();
}
