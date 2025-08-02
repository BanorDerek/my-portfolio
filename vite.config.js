import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/postcss' // Import the new package

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss], // Use the package here
    },
  },
})