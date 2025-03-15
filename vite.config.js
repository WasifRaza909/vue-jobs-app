import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  tailwindcss()
  ],
  server: {
    port: 3000, // Change the port if needed
  },
  alias: {
    '/@/': path.resolve(__dirname, './src')
  }
})
