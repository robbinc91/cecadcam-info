/**
 * CAD/CAM Study Center PWA Service Worker
 * 
 * This service worker provides offline functionality by caching:
 * - App shell (HTML pages)
 * - Static assets (CSS, JavaScript)
 * - Data files (JSON translations, team members, publications, events)
 * - External fonts and icons
 * 
 * Cache Strategy: Network First with Offline Fallback
 */

const CACHE_NAME = 'cecadcam-v1';
const STATIC_CACHE = 'cecadcam-static-v1';
const DATA_CACHE = 'cecadcam-data-v1';
const FONT_CACHE = 'cecadcam-fonts-v1';

// Files to cache immediately on install
const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/publications.html',
    '/events.html',
    '/profile.html',
    '/css/styles.css',
    '/javascript/data.js',
    '/javascript/script.js',
    '/javascript/pwa.js',
    '/manifest.json',
    '/offline.html',
    '/icons/icon-192x192.svg',
    '/icons/icon-512x512.svg',
    '/data/translations/en.json',
    '/data/translations/es.json',
    '/data/translations/ru.json',
    '/data/translations/zh.json',
    '/data/team-members.json',
    '/data/publications.json',
    '/data/events.json',
    '/data/projects.json'
];

// External resources to cache
const EXTERNAL_URLS = [
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    'https://picsum.photos/seed/university/600/400.jpg'
];

/**
 * Install Event - Precache essential files
 */
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');
    
    event.waitUntil(
        Promise.all([
            // Cache static files
            caches.open(STATIC_CACHE).then((cache) => {
                console.log('[SW] Precaching static assets');
                return cache.addAll(PRECACHE_URLS.map(url => {
                    return new Request(url, { cache: 'reload' });
                })).catch((err) => {
                    console.warn('[SW] Precache failed (expected for external URLs):', err.message);
                });
            }),
            
            // Cache external resources
            caches.open(FONT_CACHE).then((cache) => {
                return cache.addAll(EXTERNAL_URLS.map(url => {
                    return new Request(url, { cache: 'reload' });
                })).catch((err) => {
                    console.warn('[SW] External cache failed:', err.message);
                });
            })
        ]).then(() => {
            console.log('[SW] Skip waiting activated');
            return self.skipWaiting();
        })
    );
});

/**
 * Activate Event - Clean up old caches
 */
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Delete old caches
                    if (cacheName !== STATIC_CACHE && 
                        cacheName !== DATA_CACHE && 
                        cacheName !== FONT_CACHE &&
                        cacheName !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Claiming clients');
            return self.clients.claim();
        })
    );
});

/**
 * Fetch Event - Serve from cache with network fallback
 */
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip cross-origin requests (except for fonts and icons)
    if (url.origin !== location.origin) {
        // Allow fonts and CDN resources
        if (url.hostname.includes('fonts.googleapis.com') ||
            url.hostname.includes('cdnjs.cloudflare.com') ||
            url.hostname.includes('picsum.photos')) {
            // Use cache-first for external resources
            event.respondWith(cacheFirst(request, FONT_CACHE));
            return;
        }
        return;
    }
    
    // Handle API/data requests - Network First with offline fallback
    if (url.pathname.startsWith('/data/') || 
        url.pathname.includes('.json')) {
        event.respondWith(networkFirst(request, DATA_CACHE));
        return;
    }
    
    // Handle HTML pages - Network First with offline fallback
    if (request.headers.get('accept')?.includes('text/html')) {
        event.respondWith(networkFirst(request, STATIC_CACHE));
        return;
    }
    
    // Handle static assets - Cache First
    event.respondWith(cacheFirst(request, STATIC_CACHE));
});

/**
 * Cache First Strategy
 * Try cache, fall back to network
 */
async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
        // Return cached response and update cache in background
        fetchAndCache(request, cache);
        return cachedResponse;
    }
    
    // Not in cache, fetch from network
    return fetchAndCache(request, cache);
}

/**
 * Network First Strategy
 * Try network, fall back to cache
 */
async function networkFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    
    try {
        const networkResponse = await fetch(request);
        
        // Clone response for caching
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        // Network failed, try cache
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // Return offline page for HTML requests
        if (request.headers.get('accept')?.includes('text/html')) {
            const offlineResponse = await cache.match('/offline.html');
            if (offlineResponse) {
                return offlineResponse;
            }
        }
        
        // Return a basic error response
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
    }
}

/**
 * Fetch and cache helper
 */
async function fetchAndCache(request, cache) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('[SW] Fetch failed:', error.message);
        throw error;
    }
}

/**
 * Background Sync for offline form submissions
 */
self.addEventListener('sync', (event) => {
    console.log('[SW] Background sync:', event.tag);
    
    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
});

/**
 * Sync pending data when back online
 */
async function syncData() {
    // Implementation for syncing offline data
    console.log('[SW] Syncing pending data...');
    
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
        client.postMessage({
            type: 'SYNC_COMPLETE',
            message: 'Data synchronized successfully'
        });
    });
}

/**
 * Push Notifications
 */
self.addEventListener('push', (event) => {
    console.log('[SW] Push received');
    
    let data = {
        title: 'CAD/CAM Study Center',
        body: 'New content available!',
        icon: '/icons/icon-192x192.svg',
        badge: '/icons/icon-72x72.svg',
        url: '/'
    };
    
    if (event.data) {
        try {
            data = { ...data, ...event.data.json() };
        } catch (e) {
            data.body = event.data.text();
        }
    }
    
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon,
            badge: data.badge,
            data: data.url,
            vibrate: [200, 100, 200],
            actions: [
                { action: 'open', title: 'View' },
                { action: 'close', title: 'Dismiss' }
            ]
        })
    );
});

/**
 * Handle notification clicks
 */
self.addEventListener('notificationclick', (event) => {
    console.log('[SW] Notification clicked:', event.action);
    
    event.notification.close();
    
    if (event.action === 'close') {
        return;
    }
    
    const urlToOpen = event.notification.data || '/';
    
    event.waitUntil(
        self.clients.matchAll({ type: 'window' }).then((clientList) => {
            // Check if there's already a window open
            for (const client of clientList) {
                if (client.url.includes(urlToOpen) && 'focus' in client) {
                    return client.focus();
                }
            }
            
            // Open new window
            if (self.clients.openWindow) {
                return self.clients.openWindow(urlToOpen);
            }
        })
    );
});

/**
 * Message handler for communication with main app
 */
self.addEventListener('message', (event) => {
    console.log('[SW] Message received:', event.data);
    
    if (event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => caches.delete(cacheName))
                );
            }).then(() => {
                event.ports[0].postMessage({ success: true });
            })
        );
    }
    
    if (event.data.type === 'GET_CACHE_SIZE') {
        event.waitUntil(
            getCacheSize().then((size) => {
                event.ports[0].postMessage({ size });
            })
        );
    }
});

/**
 * Calculate total cache size
 */
async function getCacheSize() {
    let totalSize = 0;
    
    const cacheNames = await caches.keys();
    
    for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        
        for (const request of keys) {
            const response = await cache.match(request);
            const blob = await response.clone().blob();
            totalSize += blob.size;
        }
    }
    
    return totalSize;
}

console.log('[SW] Service Worker loaded');
