import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {VitePWA} from 'vite-plugin-pwa';

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    "name": "cap of coffee react",
    "short_name": "cap-react",
    "description": "The best cup of coffee",
    "display": "standalone",
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "lang": "ru",
    "start_url": "/",
    "scope": "/",
    icons: [
      {
        "src": "/favicon/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
      },
      {
        "src": "/favicon/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable"
      },
      // favicon-16x16.png favicon-32x32.png mstile-150x150.png 
      // apple-touch-icon.png favicon.ico 
    ],
  }
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
