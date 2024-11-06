import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';
import postcss from 'postcss-import'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'postcss',
      plugins: [
        autoprefixer(),
        postcss()
      ]
    }
  ],
  test: {
    environment: "happy-dom",
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
});
