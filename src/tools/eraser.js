import { findCircleAt, findRectangleAt, findPolygonAt, findArrowAt, findStrokeAt, findTextAt } from "../canvas/events/hit-testing.js";

function removeFirstMatching(array, predicate) {
  const index = array.findLastIndex ? array.findLastIndex(predicate) : (() => {
    for (let i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i])) return i;
    }
    return -1;
  })();

  if (index !== -1) {
    array.splice(index, 1);
    return true;
  }
  return false;
}

export function eraseAt(state, position, textContext) {
  // Check text first (drawn on top)
  const text = findTextAt(textContext, state.textItems, position);
  if (text && removeFirstMatching(state.textItems, (item) => item === text)) {
    return true;
  }

  // Check shapes
  const circle = findCircleAt(state.circleItems, position);
  if (circle && removeFirstMatching(state.circleItems, (item) => item === circle)) {
    return true;
  }

  const polygon = findPolygonAt(state.polygonItems, position);
  if (polygon && removeFirstMatching(state.polygonItems, (item) => item === polygon)) {
    return true;
  }

  const rect = findRectangleAt(state.rectangleItems, position);
  if (rect && removeFirstMatching(state.rectangleItems, (item) => item === rect)) {
    return true;
  }

  const arrow = findArrowAt(state.arrowItems || [], position);
  if (arrow && removeFirstMatching(state.arrowItems, (item) => item === arrow)) {
    return true;
  }

  // Check strokes
  const stroke = findStrokeAt(state.strokeItems, position);
  if (stroke && removeFirstMatching(state.strokeItems, (item) => item === stroke)) {
    return true;
  }

  return false;
}
