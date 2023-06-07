const CACHE_NAME = 'finance-tracker-cache-v1';
const MANIFEST_URL = '/asset-manifest.json';
const CACHED_URLS = [
  "/",
  "index.html",
  "icons/logo192.png",
  "icons/logo512.png",
  "manifest.json"
];

this.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      cacheFromManifest(),
      populateCache()
    ])
  );
});

async function cacheFromManifest() {
  const response = await fetch(MANIFEST_URL);
  const manifest = await response.json();
  const files = manifest.files || {};

  const urlsToCache = Object.values(files);

  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(urlsToCache);
}

async function populateCache() {
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(CACHED_URLS);
}

this.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // If a matching response is found in the cache, return it
          if (response) {
            return response;
          }
  
          // If there is no matching response in the cache, try fetching from the network
          return fetch(event.request)
            .then((networkResponse) => {
              // If the response is successful, cache the new response
              if (networkResponse.ok) {
                const cacheResponse = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, cacheResponse);
                  });
              }
  
              return networkResponse;
            })
            .catch(() => {
              // If the network request fails, serve a fallback response
              return new Response('Offline fallback page', { status: 200, headers: { 'Content-Type': 'text/html' } });
            });
        })
    );
  });