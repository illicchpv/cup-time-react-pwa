[PWA integrations for Vite and the ecosystem](https://vite-pwa-org.netlify.app/)

npm install -D vite-plugin-pwa

workbox config  
https://vite-pwa-org.netlify.app/guide/service-worker-precache.html#service-worker-precache


https for localhost  
https://www.npmjs.com/package/https-localhost
  HTTPS server running on localhost
     >serve

npm install gh-pages --save-dev

https://github.com/illicchpv/cup-time-react-pwa

на gitpages опубликовать не получилось. надо пути переделывать
  https://illicchpv.github.io/cup-time-react-pwa/


https://cup-time-react-pwa.vercel.app/#/products?category=coffee

'CacheFirst' | 'CacheOnly' | 'NetworkFirst' | 'NetworkOnly' | 'StaleWhileRevalidate'

не обязательно предотвращать хеширование выходных файлов в vite.config.js
  // build: {
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: `assets/[name].js`,
  //       chunkFileNames: `assets/[name].js`,
  //       assetFileNames: `assets/[name].[ext]`
  //     }
  //   }
  // }

https://cup-time-react-pwa.vercel.app

подгонка дизайна 

удалось опубликовать на GitHub Pages но пришлось вернуться к HashRouter
  в package.json поменялась команда:  "build": "vite build --base=./ --emptyOutDir", 
  [cup time](https://illicchpv.github.io/cup-time-react-pwa)
