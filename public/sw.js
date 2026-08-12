try {
  importScripts("./sw-version.js");
} catch (error) {
  console.warn("ZythoHunt: identifiant de build indisponible", error);
}

const CACHE_VERSION = `zythohunt-${self.__ZYTHOHUNT_BUILD_ID || "dev"}`;
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const MAX_IMAGE_ENTRIES = 90;
const NETWORK_TIMEOUT_MS = 4500;

try {
  importScripts("./sw-precache.js");
} catch (error) {
  console.warn("ZythoHunt: manifeste de précache indisponible", error);
}

const PRECACHE_URLS = Array.isArray(self.__ZYTHOHUNT_PRECACHE)
  ? self.__ZYTHOHUNT_PRECACHE
  : ["./", "./offline.html", "./manifest.webmanifest", "./beer-search-index.json"];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    await cache.addAll(PRECACHE_URLS);
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((key) => key.startsWith("zythohunt-") && !key.startsWith(CACHE_VERSION))
        .map((key) => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

async function cachedResponse(request, fallbackUrl = null) {
  const direct = await caches.match(request);
  if (direct) return direct;
  if (fallbackUrl) return caches.match(fallbackUrl);
  return null;
}

async function networkFirst(request, { timeoutMs = NETWORK_TIMEOUT_MS, fallbackUrl = null } = {}) {
  const cache = await caches.open(RUNTIME_CACHE);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(request, { signal: controller.signal });
    if (response.ok) await cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await cachedResponse(request, fallbackUrl);
    if (cached) return cached;
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

async function trimCache(cache, maxEntries) {
  const keys = await cache.keys();
  const excess = keys.length - maxEntries;
  if (excess <= 0) return;
  await Promise.all(keys.slice(0, excess).map((request) => cache.delete(request)));
}

async function staleWhileRevalidateImage(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  const update = fetch(request).then(async (response) => {
    if (response.ok) {
      await cache.put(request, response.clone());
      await trimCache(cache, MAX_IMAGE_ENTRIES);
    }
    return response;
  }).catch(() => null);

  if (cached) {
    void update;
    return cached;
  }

  const response = await update;
  if (response) return response;
  throw new Error(`Image unavailable: ${request.url}`);
}

async function staleWhileRevalidateRuntime(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cachedResponse(request);
  const update = fetch(request).then(async (response) => {
    if (response.ok) await cache.put(request, response.clone());
    return response;
  }).catch(() => null);
  return cached || update;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate" || request.destination === "document") {
    const offlineUrl = new URL("offline.html", self.registration.scope).href;
    event.respondWith(networkFirst(request, { fallbackUrl: offlineUrl }));
    return;
  }

  if (["script", "style", "worker"].includes(request.destination)) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (request.destination === "image") {
    event.respondWith(staleWhileRevalidateImage(request));
    return;
  }

  if (["font", "manifest"].includes(request.destination) || url.pathname.endsWith("/beer-search-index.json")) {
    event.respondWith(staleWhileRevalidateRuntime(request));
  }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil((async () => {
    const badgeId = event.notification.data?.badgeId || null;
    const allClients = await clients.matchAll({ type: "window", includeUncontrolled: true });

    if (allClients.length > 0) {
      const client = allClients[0];
      await client.focus();
      if (badgeId) client.postMessage({ type: "OPEN_BADGE", badgeId });
      return;
    }

    const target = badgeId
      ? `./?badge=${encodeURIComponent(badgeId)}`
      : "./";
    await clients.openWindow(target);
  })());
});
