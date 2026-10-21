import { drawRectangle } from "../../tools/rectangle.js";
import { drawCircle } from "../../tools/circle.js";
import { drawPolygon } from "../../tools/polygon.js";
import { findCircleAt, findRectangleAt, findPolygonAt } from "./hit-testing.js";
import { getBoundingBox } from "../coordinates.js";

export const SHAPE_CONFIGS = {
  circle: {
    getItems: (state) => state.circleItems,
    findAt: findCircleAt,
    editingKey: "editingCircle",
    drawPreview: (context, start, current, state) =>
      drawCircle(context, start, current, state.selectedColor),
    createItem: (start, end, state) => ({
      ...getBoundingBox(start, end),
      color: state.selectedColor
    })
  },
  rectangle: {
    getItems: (state) => state.rectangleItems,
    findAt: findRectangleAt,
    editingKey: "editingRectangle",
    drawPreview: (context, start, current, state) =>
      drawRectangle(context, start, current, state.selectedColor),
    createItem: (start, end, state) => ({
      ...getBoundingBox(start, end),
      color: state.selectedColor
    })
  },
  polygon: {
    getItems: (state) => state.polygonItems,
    findAt: findPolygonAt,
    editingKey: "editingPolygon",
    drawPreview: (context, start, current, state) =>
      drawPolygon(context, start, current, state.polygonSides, state.selectedColor),
    createItem: (start, end, state) => ({
      ...getBoundingBox(start, end),
      sides: state.polygonSides,
      color: state.selectedColor
    })
  }
};
