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
      },
      // favicon-16x16.png favicon-32x32.png mstile-150x150.png 
      // apple-touch-icon.png favicon.ico 
    ],
  },
  workbox: {
    // modifyURLPrefix: { "/assets": "./assets" },

    globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,woff,woff2,txt}'],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/cup-time-api-q31j.onrender.com\/api/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: "api-cache",
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      },
      {
        urlPattern: /^https:\/\/cup-time-api-q31j.onrender.com\/images/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: "img-cache",
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      },
    ],
  },
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
});
