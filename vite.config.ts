import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [react(), reactRefresh()],
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
