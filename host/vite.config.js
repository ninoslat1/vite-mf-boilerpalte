import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        RemoteApp: '/remote-app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    proxy: {
      '/remote-app/assets': {
        target: 'http://localhost:4173',
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/remote-app/, ''),
        build: {
          target: 'esnext'
        }
      },
    },
  },
  build: {
    target: 'esnext'
  }
});