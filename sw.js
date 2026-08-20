const CACHE = 'zombie-v1';
const FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/1png.png',           // <-- بدلنا
  '/2png2.png',          // <-- بدلنا  
  '/IMG-20260820-WA354...'  // <-- زيدنا الخريطة
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
