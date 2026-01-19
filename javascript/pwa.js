/**
 * CAD/CAM Study Center PWA JavaScript
 * 
 * Handles:
 * - Service Worker registration
 * - PWA install prompt
 * - Update notifications
 * - Offline status detection
 * - Background sync handling
 */

(function() {
    'use strict';

    // PWA State
    const pwaState = {
        deferredPrompt: null,
        isInstalled: false,
        isOnline: navigator.onLine,
        updateAvailable: false
    };

    /**
     * Initialize PWA features
     */
    function init() {
        if (!('serviceWorker' in navigator)) {
            console.log('[PWA] Service Workers not supported');
            return;
        }

        console.log('[PWA] Initializing PWA features...');

        // Register Service Worker
        registerServiceWorker();

        // Listen for online/offline events
        setupConnectivityMonitoring();

        // Listen for install prompt
        setupInstallPrompt();

        // Listen for app installed event
        setupAppInstalled();

        // Check if already installed
        checkIfInstalled();

        // Setup push notifications (if enabled)
        setupPushNotifications();
    }

    /**
     * Register Service Worker
     */
    function registerServiceWorker() {
        navigator.serviceWorker.register('/javascript/sw.js')
            .then((registration) => {
                console.log('[PWA] Service Worker registered:', registration.scope);

                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('[PWA] New service worker found');

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New content available
                            pwaState.updateAvailable = true;
                            showUpdateNotification();
                        }
                    });
                });

                // Handle messages from service worker
                navigator.serviceWorker.addEventListener('message', handleSWMessage);
            })
            .catch((error) => {
                console.error('[PWA] Service Worker registration failed:', error);
            });
    }

    /**
     * Handle messages from Service Worker
     */
    function handleSWMessage(event) {
        console.log('[PWA] Message from SW:', event.data);

        if (event.data.type === 'SYNC_COMPLETE') {
            showToast(event.data.message);
        }
    }

    /**
     * Setup online/offline monitoring
     */
    function setupConnectivityMonitoring() {
        // Update online status
        function updateOnlineStatus() {
            pwaState.isOnline = navigator.onLine;
            console.log('[PWA] Online status:', pwaState.isOnline);

            if (pwaState.isOnline) {
                showToast('You are back online');
                syncOfflineData();
            } else {
                showToast('You are offline. Some features may be limited.');
            }
        }

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        // Initial check
        updateOnlineStatus();
    }

    /**
     * Setup Install Prompt
     */
    function setupInstallPrompt() {
        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            pwaState.isInstalled = true;
            console.log('[PWA] App is running in standalone mode');
            return;
        }

        // Listen for beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('[PWA] Install prompt available');
            
            // Prevent Chrome from showing the automatic prompt
            e.preventDefault();
            pwaState.deferredPrompt = e;

            // Show custom install button after delay
            setTimeout(() => {
                if (!pwaState.isInstalled && !localStorage.getItem('pwaInstallDeclined')) {
                    showInstallButton();
                }
            }, 15000); // 15 seconds delay
        });
    }

    /**
     * Show Install Button
     */
    function showInstallButton() {
        // Remove existing button
        const existingBtn = document.getElementById('pwa-install-button');
        if (existingBtn) {
            existingBtn.remove();
        }

        // Create install button
        const installBtn = document.createElement('button');
        installBtn.id = 'pwa-install-button';
        installBtn.className = 'pwa-install-button';
        installBtn.innerHTML = `
            <span class="pwa-install-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
            </span>
            <span class="pwa-install-text">Install App</span>
        `;

        // Add click handler
        installBtn.addEventListener('click', async () => {
            await installPWA();
        });

        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'pwa-install-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            installBtn.remove();
            localStorage.setItem('pwaInstallDeclined', 'true');
        });

        installBtn.appendChild(closeBtn);
        document.body.appendChild(installBtn);

        // Animate in
        requestAnimationFrame(() => {
            installBtn.classList.add('visible');
        });
    }

    /**
     * Install PWA
     */
    async function installPWA() {
        if (!pwaState.deferredPrompt) {
            return;
        }

        // Show the prompt
        pwaState.deferredPrompt.prompt();

        // Wait for user choice
        const { outcome } = await pwaState.deferredPrompt.userChoice;

        console.log('[PWA] Install outcome:', outcome);

        // Clear the prompt
        pwaState.deferredPrompt = null;

        // Remove install button
        const installBtn = document.getElementById('pwa-install-button');
        if (installBtn) {
            installBtn.remove();
        }

        if (outcome === 'accepted') {
            localStorage.setItem('pwaInstalled', 'true');
            pwaState.isInstalled = true;
            showToast('App installed successfully!');
        } else {
            localStorage.setItem('pwaInstallDeclined', 'true');
        }
    }

    /**
     * Setup App Installed Event
     */
    function setupAppInstalled() {
        window.addEventListener('appinstalled', () => {
            console.log('[PWA] App was installed');
            pwaState.isInstalled = true;
            localStorage.setItem('pwaInstalled', 'true');
            
            // Remove install button if present
            const installBtn = document.getElementById('pwa-install-button');
            if (installBtn) {
                installBtn.remove();
            }

            showToast('App installed successfully!');
        });
    }

    /**
     * Check if already installed
     */
    function checkIfInstalled() {
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        const wasInstalled = localStorage.getItem('pwaInstalled');

        if (isStandalone || wasInstalled) {
            pwaState.isInstalled = true;
            console.log('[PWA] App is installed');
        }
    }

    /**
     * Setup Push Notifications
     */
    function setupPushNotifications() {
        if (!('Notification' in window)) {
            console.log('[PWA] Notifications not supported');
            return;
        }

        // Request permission on user interaction
        document.addEventListener('click', async () => {
            if (Notification.permission === 'default') {
                await Notification.requestPermission();
            }
        }, { once: true });

        // Check current permission
        console.log('[PWA] Notification permission:', Notification.permission);
    }

    /**
     * Show Update Notification
     */
    function showUpdateNotification() {
        // Create notification element
        const notification = document.createElement('div');
        notification.id = 'pwa-update-notification';
        notification.className = 'pwa-update-notification';
        notification.innerHTML = `
            <div class="pwa-update-content">
                <span class="pwa-update-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/>
                    </svg>
                </span>
                <span class="pwa-update-text">New version available!</span>
            </div>
            <button class="pwa-update-button">Update Now</button>
        `;

        // Add click handler for update button
        const updateBtn = notification.querySelector('.pwa-update-button');
        updateBtn.addEventListener('click', () => {
            updateApplication();
        });

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.classList.add('visible');
        });
    }

    /**
     * Update Application
     */
    function updateApplication() {
        // Send message to service worker to skip waiting
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
        }

        // Reload page
        window.location.reload();
    }

    /**
     * Show Toast Notification
     */
    function showToast(message, duration = 3000) {
        // Remove existing toast
        const existingToast = document.getElementById('pwa-toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create toast
        const toast = document.createElement('div');
        toast.id = 'pwa-toast';
        toast.className = 'pwa-toast';
        toast.textContent = message;

        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.add('visible');
        });

        // Remove after duration
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    /**
     * Sync offline data when back online
     */
    async function syncOfflineData() {
        // Check if there's pending data to sync
        const pendingData = localStorage.getItem('offlineData');
        
        if (pendingData) {
            try {
                // Get the service worker registration
                const registration = await navigator.serviceWorker.ready;
                
                // Trigger background sync
                if ('sync' in registration) {
                    await registration.sync.register('sync-data');
                    console.log('[PWA] Background sync registered');
                }
            } catch (error) {
                console.error('[PWA] Sync failed:', error);
            }
        }
    }

    /**
     * Get PWA State
     */
    function getState() {
        return pwaState;
    }

    /**
     * Check for updates manually
     */
    function checkForUpdates() {
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'CHECK_FOR_UPDATES' });
        }
    }

    /**
     * Clear all caches
     */
    async function clearCache() {
        try {
            await caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => caches.delete(cacheName))
                );
            });
            showToast('Cache cleared successfully');
            return true;
        } catch (error) {
            console.error('[PWA] Clear cache failed:', error);
            showToast('Failed to clear cache');
            return false;
        }
    }

    /**
     * Get cache size
     */
    async function getCacheSize() {
        try {
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

            return formatBytes(totalSize);
        } catch (error) {
            console.error('[PWA] Get cache size failed:', error);
            return 'Unknown';
        }
    }

    /**
     * Format bytes to human readable
     */
    function formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Expose PWA functions globally
    window.PWA = {
        getState,
        checkForUpdates,
        clearCache,
        getCacheSize,
        showToast,
        install: installPWA
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
