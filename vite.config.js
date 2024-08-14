import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {VitePWA} from 'vite-plugin-pwa';

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
});

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().valueOf()),
  },
  plugins: [
    react(),
    vitePWA,
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
});
