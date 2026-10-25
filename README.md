# Sticky Node

A simple, no-frills drawing canvas that runs entirely in your browser. Sketch freehand, drop in shapes and arrows, add text, and save your work to a file. Everything is stored locally, so there are no accounts and no servers.

Built with vanilla JavaScript and [Vite](https://vite.dev/), and deployed to GitHub Pages.

## Features

- **Freehand drawing** with adjustable stroke width and color
- **Shapes**: rectangle, circle/ellipse, regular polygon (choose the number of sides), and arrow
- **Text** with adjustable font size and multi-line support
- **Move things after drawing them**: click and drag any stroke, shape, arrow, or text item to reposition it
- **Object eraser**: erases whole items rather than pixels
- **Undo / redo** (up to 100 steps)
- **Autosave** to your browser's `localStorage`, so your drawing is still there when you come back
- **Save / open files** as `.sticky.json` so you can back up or share drawings

## Getting started

You need [Node.js](https://nodejs.org/) 18 or newer (the CI build uses Node 20) and npm.

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production (outputs to dist/)
npm run build

# preview the production build locally
npm run preview
```

Installing Node/npm: `brew install node` on macOS, `sudo apt install nodejs npm` on Debian/Ubuntu, or the installer from nodejs.org on Windows.

## How to use

| Tool | How it works |
| --- | --- |
| **Draw** | Click and drag to draw. Clicking an existing stroke picks it up and moves it instead. |
| **Rectangle / Circle / Polygon / Arrow** | Click and drag to size a new shape. Click an existing shape of the same type to move it. For polygons, set the number of sides (3 or more) before clicking **Polygon**. |
| **Text** | Click empty space to place a text box, then press **Enter** to commit (**Shift+Enter** for a new line, **Esc** to cancel). Drag existing text to move it, and **right-click** it to edit. |
| **Eraser** | Toggle on, then click or drag over items to remove them. |
| **Undo / Redo** | Buttons, or `Ctrl/Cmd+Z` and `Ctrl/Cmd+Shift+Z` (or `Ctrl/Cmd+Y`). |
| **Save File / Open File** | Export or import the drawing as JSON. Uses the File System Access API where available, with a normal download as the fallback. |
| **Clear Canvas** | Removes everything, including the autosaved copy. |

## Project structure

```
src/
├── index.html            # landing page
├── canvas.html           # the drawing app
├── main.js               # app entry point, state, undo/redo wiring
├── style.css
├── canvas/
│   ├── controls.js       # toolbar buttons, sliders, keyboard shortcuts
│   ├── coordinates.js    # mouse position and bounding-box helpers
│   ├── events.js         # mouse event routing
│   ├── events/           # per-tool handlers (freehand, shapes, text),
│   │                     # hit-testing, and shape definitions
│   ├── files.js          # save/open .sticky.json files
│   ├── history.js        # undo/redo snapshot stack
│   ├── storage.js        # localStorage persistence
│   └── render/render.js  # redraws all items onto the overlay canvas
└── tools/                # drawing code for each tool
                          # (arrow, circle, polygon, rectangle, text, fill, eraser)
```

### How it works

All drawn content is kept as plain data in a single `state` object (`strokeItems`, `rectangleItems`, `circleItems`, `polygonItems`, `arrowItems`, `textItems`). The app renders these items onto an overlay canvas stacked above the main canvas. Because everything is stored as data rather than pixels, items can be moved, erased, serialized to JSON, and restored by undo/redo.

Adding a new shape generally means adding a draw function in `src/tools/`, a hit-test in `hit-testing.js`, and an entry in `SHAPE_CONFIGS` in `shape-definitions.js`.

## Deployment

Pushes to `main` automatically build the site and deploy it to GitHub Pages via `.github/workflows/deploy.yml`. To enable this, set **Settings → Pages → Source** to **GitHub Actions** in the repository.

## License

ISC