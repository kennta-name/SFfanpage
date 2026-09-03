import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 43180,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 43180,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        character: resolve(root, 'character.html'),
      },
    },
  },
})