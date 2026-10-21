import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                canvas: resolve(__dirname, 'src/canvas.html'),
            },
        },
    },
});