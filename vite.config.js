import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Important for static builds
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  // Add this for client-side routing
  server: {
    historyApiFallback: true,
  }
});