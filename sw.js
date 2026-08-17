const CACHE_NAME = 'm3taz-portfolio-20260817081905';
const PRECACHE_ASSETS = [
  '/',
  '/ar/',
  '/index.html',
  '/ar/index.html',
  '/app.js',
  '/assets/favicon.svg',
  '/assets/moataz-ahmed-pic.jpg',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Never cache the service worker script itself so updates always propagate.
  if (url.pathname === '/sw.js') {
    event.respondWith(
      fetch(new Request(event.request, { cache: 'no-store' })).catch(() => caches.match('/'))
    );
    return;
  }

  // Navigation requests: stale-while-revalidate for fast updates.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        fetch(event.request)
          .then((response) => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          })
          .catch(() => cache.match(event.request).then((cached) => cached || caches.match('/')))
      )
    );
    return;
  }

  // Static assets: cache-first, then network fallback.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (!response.ok) return response;
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(() => {});
          return response;
        })
        .catch(() => caches.match('/'));
    })
  );
});
