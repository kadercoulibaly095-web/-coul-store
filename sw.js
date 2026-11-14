/* COUL STORE — service worker
   Changez le numéro de version à chaque grosse mise à jour du site. */
const VERSION = "coul-v1";
const SHELL = [
  "./",
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(VERSION).then(cache =>
      Promise.all(SHELL.map(url => cache.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);

  if (req.method !== "GET" || url.origin !== location.origin) return;

  const isCode = req.mode === "navigate" || /\.(html|css|js|json)$/.test(url.pathname);

  if (isCode) {
    // Pages et code : réseau d'abord (toujours à jour), cache si hors-ligne
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match("index.html")))
    );
    return;
  }

  // Images : cache d'abord (chargement rapide), puis réseau
  e.respondWith(
    caches.match(req).then(cached =>
      cached ||
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
        return res;
      })
    )
  );
});

