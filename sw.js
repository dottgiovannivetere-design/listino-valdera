self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// NESSUNA CACHE: evita versioni vecchie e problemi col PDF
self.addEventListener("fetch", () => {});
