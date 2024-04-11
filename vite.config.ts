import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    host: true, // Here
    strictPort: true,
    port: Number(process.env.PORT) || 3000,
    watch: {
      usePolling: true,
    },
  },
});
