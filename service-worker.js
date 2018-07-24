let staticCacheName = "restaurant-cache-v1";

let urlsToCache = [
  "./",
  ".service-worker.js",
  "index.html",
  "restaurant.html",
  "css/styles.css",
  "data/restaurants.json",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "js/dbhelper.js",
  "js/main.js",
  "js/resaurant_info.js"
];

self.addEventListener('install', event => {


  event.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache => cache.addAll(urlsToCache))

  );
});

self.addEventListener('activate', event => {
  caches.keys().then( cacheNames => {
    return Promise.all(
      cacheNames.filter( cacheName => {
        return cacheName.startsWith('restaurant-') &&
               cacheName != staticCacheName;
      }).map(cacheName => {
        return cache.delete(cacheName);
      })
    );
  })
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
