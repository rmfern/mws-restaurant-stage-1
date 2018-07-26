let staticCacheName = "restaurant-static-v1";

self.addEventListener('install', event => {


  event.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache => cache.addAll([
        "/",
        "service-worker.js",
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
        "js/restaurant_info.js"
        ])
      )
      .catch(err => console.log(err))
  );
});
// Something broken here
self.addEventListener('activate', () => {
  caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.filter(cacheName => {
        return cacheName.startsWith('restaurant-') && cacheName != staticCacheName;
      }).map(cacheName => {
        return caches.delete(cacheName);
      })
    );
  })
});

self.addEventListener('fetch', event => {
  console.log(event.request.url)
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
