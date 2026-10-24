import { findCircleAt, findRectangleAt, findPolygonAt } from "../canvas/events/hit-testing.js";

export function fillAt(state, position, color) {
    const target =
    findPolygonAt(state.polygonItems, position) ||
    findCircleAt(state.circleItems, position) ||
    findRectangleAt(state.rectangleItems, position);

    if (!target) return false;

    if (color === null) {
        if (!target.fill) return false;
        delete target.fill;
        return true;
    }

    if (target.fill === color) return false;
    target.fill = color;
    return true;
}