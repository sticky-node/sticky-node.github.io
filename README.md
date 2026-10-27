Sticky Node

A simple, no-frills drawing canvas that runs entirely in your browser. Sketch freehand, drop in shapes and arrows, add text, and save your work to a file. Everything is stored locally, so there are no accounts and no servers.

Built with Kotlin/JS and Gradle, and deployed to GitHub Pages.

## Features

- Freehand drawing with adjustable stroke width and color
- Shapes: rectangle, circle/ellipse, regular polygon (choose the number of sides), and arrow
- Text with adjustable font size and multi-line support
- Move things after drawing them: click and drag any stroke, shape, arrow, or text item to reposition it
- Object eraser: erases whole items rather than pixels
- Undo / redo (up to 100 steps)
- Autosave to your browser's localStorage, so your drawing is still there when you come back
- Save / open files as .sticky.json so you can back up or share drawings

## Getting started

You need JDK 17 or newer and Gradle (or generate the wrapper once with `gradle wrapper`).

```bash
# start the dev server
./gradlew jsBrowserDevelopmentRun

# build for production (outputs to build/dist/js/productionExecutable)
./gradlew jsBrowserDistribution
```

## How to use

| Tool | How it works |
| --- | --- |
| Draw | Click and drag to draw. Clicking an existing stroke picks it up and moves it instead. |
| Rectangle / Circle / Polygon / Arrow | Click and drag to size a new shape. Click an existing shape of the same type to move it. For polygons, set the number of sides (3 or more) before clicking Polygon. |
| Text | Click empty space to place a text box, then press Enter to commit (Shift+Enter for a new line, Esc to cancel). Drag existing text to move it, and right-click it to edit. |
| Eraser | Toggle on, then click or drag over items to remove them. |
| Undo / Redo | Buttons, or Ctrl/Cmd+Z and Ctrl/Cmd+Shift+Z (or Ctrl/Cmd+Y). |
| Save File / Open File | Export or import the drawing as JSON. Uses the File System Access API where available, with a normal download as the fallback. |
| Clear Canvas | Removes everything, including the autosaved copy. |
