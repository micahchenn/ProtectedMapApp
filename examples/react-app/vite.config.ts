import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@flowmap.gl/layers': path.resolve(__dirname, '../../packages/layers/src/index.ts'),
    },
  },
});