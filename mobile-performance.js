/**
 * Mobile Performance Optimizations
 * This script runs immediately to optimize performance on mobile devices
 */

(function() {
    // Check if we're on a mobile device
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Reduce animation complexity for better performance
        
        // 1. Optimize fireflies animation
        window.mobileOptimizedFireflies = true;
        
        // 2. Optimize video loading
        const loadingVideo = document.getElementById('loading-video');
        if (loadingVideo) {
            // Use a smaller version for mobile if available
            const source = loadingVideo.querySelector('source');
            if (source && source.src.includes('bg.mp4')) {
                // Try to load mobile-optimized version if it exists
                fetch('bg-mobile.mp4', { method: 'HEAD' })
                    .then(response => {
                        if (response.ok) {
                            source.src = 'bg-mobile.mp4';
                            loadingVideo.load();
                        }
                    })
                    .catch(() => {
                        // If mobile version doesn't exist, optimize the current video
                        loadingVideo.playbackRate = 1.25; // Slightly faster playback
                    });
            }
        }
        
        // 3. Disable complex animations
        document.documentElement.classList.add('mobile-optimized');
        
        // 4. Optimize scroll performance
        let lastScrollTime = 0;
        const scrollThrottle = 100; // ms
        
        window.addEventListener('scroll', function() {
            const now = Date.now();
            if (now - lastScrollTime > scrollThrottle) {
                lastScrollTime = now;
                // Allow scroll handlers to run at reduced frequency
                window.requestAnimationFrame(() => {
                    window.dispatchEvent(new CustomEvent('optimized-scroll'));
                });
            }
        }, { passive: true });
    }
})();