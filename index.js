$document.querySelector('from')
    .addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    alert(JSON.stringify(data))
})



self.addEventListener('install', (e) => {
  console.log('Service Worker instalado');
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker activado');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(e.request);
});

