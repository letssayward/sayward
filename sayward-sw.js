/* SAYWARD installable PWA v6.4.45
 * Networking pass-through only. NEVER cache index.html, Supabase API requests,
 * audio, recordings, or app data. The SW exists to enable WebAPK installation.
 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request));
});
