self.addEventListener('install', (e) => {
  console.log('Service Worker instalado');
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker activado');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(e.request);
});

