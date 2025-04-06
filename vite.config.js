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
    proxy: {
      '/api': {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  alias: {
    '/@/': path.resolve(__dirname, './src')
  }
})
