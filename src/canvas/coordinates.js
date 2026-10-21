export function getMousePosition(canvas, event) {
  const rectangle = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rectangle.left,
    y: event.clientY - rectangle.top
  };
}

export function getBoundingBox(start, end) {
  return {
    x: Math.min(start.x, end.x),
    y: Math.min(start.y, end.y),
    width: Math.abs(end.x - start.x),
    height: Math.abs(end.y - start.y)
  };
}
