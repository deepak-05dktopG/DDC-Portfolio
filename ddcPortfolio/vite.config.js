import path from "path"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // GitHub Pages serves this repo under /DDC-Portfolio/
  // Keep dev at / to avoid breaking local `vite`.
  base: command === 'build' ? '/DDC-Portfolio/' : '/',
  assetsInclude: ['**/*.docx', '**/*.pdf'],
}))
