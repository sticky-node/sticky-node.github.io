export function findCircleAt(circleItems, position) {
  return [...circleItems].reverse().find(({ x, y, width, height }) => {
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const radiusX = width / 2;
    const radiusY = height / 2;

    if (radiusX === 0 || radiusY === 0) return false;

    const normalizedX = (position.x - centerX) / radiusX;
    const normalizedY = (position.y - centerY) / radiusY;

    return normalizedX ** 2 + normalizedY ** 2 <= 1;
  });
}

export function findRectangleAt(rectangleItems, position) {
  return [...rectangleItems].reverse().find(
    ({ x, y, width, height }) =>
      position.x >= x &&
      position.x <= x + width &&
      position.y >= y &&
      position.y <= y + height
  );
}

export function findStrokeAt(strokeItems, position) {
  return [...strokeItems].reverse().find(({ points }) => {
    return points.some((point, index) => {
      const nextPoint = points[index + 1];
      if (!nextPoint) {
        return Math.hypot(point.x - position.x, point.y - position.y) <= 8;
      }

      const segmentX = nextPoint.x - point.x;
      const segmentY = nextPoint.y - point.y;
      const segmentLengthSquared = segmentX ** 2 + segmentY ** 2;
      const projection = segmentLengthSquared === 0
        ? 0
        : Math.max(
            0,
            Math.min(
              1,
              ((position.x - point.x) * segmentX +
                (position.y - point.y) * segmentY) /
                segmentLengthSquared
            )
          );
      const closestX = point.x + projection * segmentX;
      const closestY = point.y + projection * segmentY;

      return Math.hypot(position.x - closestX, position.y - closestY) <= 8;
    });
  });
}

export function findTextAt(textContext, textItems, position) {
  return [...textItems].reverse().find((textItem) => {
    const lines = textItem.text.split("\n");
    const width = Math.max(
      ...lines.map((line) => textContext.measureText(line).width),
      1
    );
    const height = lines.length * 24;

    return (
      position.x >= textItem.x &&
      position.x <= textItem.x + width &&
      position.y >= textItem.y &&
      position.y <= textItem.y + height
    );
  });
}
