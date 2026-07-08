import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'HistogramSlider',
      fileName: 'histogram-slider',
      formats: ['es', 'umd']
    },

    rollupOptions: {
      external: ['vue', 'jquery'],
      output: {
        globals: {
          vue: 'Vue',
          jquery: '$'
        }
      }
    }
  }
})
