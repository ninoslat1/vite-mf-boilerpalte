import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    federation({
      name: "remote_login_sap",
      filename: 'remoteEntry.js',
      exposes: {
        "./App": "./src/App"
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  server: {
    port: 4173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:4173",
  },
})
