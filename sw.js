// Service Worker for ARY Photography
const CACHE_NAME = 'ary-photography-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/script.js',
  '/js/core-fixes.js',
  '/menu-fix.js',
  '/portfolio-scroll.js',
  '/natural-fireflies.js',
  '/lazy-loader.js',
  '/lightbox-a11y.js',
  '/image-protection.js',
  '/cookie-consent.js',
  '/1000114679.png',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/Wallpaper/IMG_20240531_182636110.jpg',
  '/Wallpaper/IMG_20241011_203636007.jpg',
  '/Wallpaper/IMG_20220604_093032988_BURST000_COVER-01.jpeg',
  '/Wallpaper/IMG_20241011_201905158.jpg',
  '/Wallpaper/IMG_20220316_142405328-01.jpeg',
  '/Wallpaper/IMG_20240607_181102529~2.jpg',
  '/Wallpaper/ary.jpg'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses or non-GET requests
            if (!response || response.status !== 200 || event.request.method !== 'GET') {
              return response;
            }
            
            // Clone the response as it can only be consumed once
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(() => {
            // If both cache and network fail, serve offline page
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            
            // Return a placeholder image for image requests
            if (event.request.destination === 'image') {
              return caches.match('/icons/offline-image.png');
            }
            
            // Return nothing for other resources
            return new Response('', { status: 408, statusText: 'Request timed out.' });
          });
      })
  );
});