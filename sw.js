// Guarda la app en el móvil para que funcione sin conexión
const CACHE = "cronicas-d319b31667";
const FILES = ["./", "apple-touch-icon.png", "arte.js", "carta.css", "datos.enc", "fonts.css", "fonts/f1.woff2", "fonts/f10.woff2", "fonts/f11.woff2", "fonts/f2.woff2", "fonts/f3.woff2", "fonts/f4.woff2", "fonts/f5.woff2", "fonts/f6.woff2", "fonts/f7.woff2", "fonts/f8.woff2", "fonts/f9.woff2", "icono-192.png", "icono-512-maskable.png", "icono-512.png", "index.html", "manifest.webmanifest"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
