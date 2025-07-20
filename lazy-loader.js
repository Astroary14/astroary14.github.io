// Enhanced lazy loading and WebP conversion
document.addEventListener('DOMContentLoaded', function() {
    // Check WebP support
    function checkWebPSupport() {
        return new Promise(resolve => {
            const webP = new Image();
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
            webP.onload = webP.onerror = function() {
                resolve(webP.height === 2);
            };
        });
    }
    
    // Initialize lazy loading for all images
    async function initLazyLoading() {
        const supportsWebP = await checkWebPSupport();
        console.log('WebP support:', supportsWebP);
        
        // Find all images to lazy load
        const lazyImages = [
            ...document.querySelectorAll('img[data-src]'),                  // Standard images
            ...document.querySelectorAll('.portfolio-image[data-src]'),     // Portfolio backgrounds
            ...document.querySelectorAll('[data-background]')               // Elements with background images
        ];
        
        console.log(`Found ${lazyImages.length} images to lazy load`);
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        
                        // Handle different types of images
                        if (element.tagName === 'IMG') {
                            loadImage(element, element.dataset.src, supportsWebP);
                        } else if (element.classList.contains('portfolio-image')) {
                            loadBackgroundImage(element, element.dataset.src, supportsWebP);
                        } else if (element.dataset.background) {
                            loadBackgroundImage(element, element.dataset.background, supportsWebP);
                        }
                        
                        observer.unobserve(element);
                    }
                });
            }, {
                rootMargin: '200px 0px', // Start loading 200px before they come into view
                threshold: 0.01
            });
            
            lazyImages.forEach(image => imageObserver.observe(image));
        } else {
            // Fallback for browsers without IntersectionObserver
            lazyImages.forEach(element => {
                if (element.tagName === 'IMG') {
                    loadImage(element, element.dataset.src, supportsWebP);
                } else if (element.classList.contains('portfolio-image')) {
                    loadBackgroundImage(element, element.dataset.src, supportsWebP);
                } else if (element.dataset.background) {
                    loadBackgroundImage(element, element.dataset.background, supportsWebP);
                }
            });
        }
    }
    
    // Load image with WebP conversion if supported
    function loadImage(imgElement, src, supportsWebP) {
        if (!src) return;
        
        const imgPath = src.substring(0, src.lastIndexOf('.'));
        const imgExt = src.substring(src.lastIndexOf('.'));
        
        // Try WebP version if supported
        if (supportsWebP && imgExt !== '.webp') {
            const webpPath = `${imgPath}.webp`;
            
            // Check if WebP exists
            fetch(webpPath, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        imgElement.src = webpPath;
                    } else {
                        imgElement.src = src;
                    }
                    
                    // Clean up data attributes
                    imgElement.removeAttribute('data-src');
                })
                .catch(() => {
                    imgElement.src = src;
                    imgElement.removeAttribute('data-src');
                });
        } else {
            imgElement.src = src;
            imgElement.removeAttribute('data-src');
        }
    }
    
    // Load background image with WebP conversion if supported
    function loadBackgroundImage(element, src, supportsWebP) {
        if (!src) return;
        
        const imgPath = src.substring(0, src.lastIndexOf('.'));
        const imgExt = src.substring(src.lastIndexOf('.'));
        
        // Try WebP version if supported
        if (supportsWebP && imgExt !== '.webp') {
            const webpPath = `${imgPath}.webp`;
            
            // Check if WebP exists
            fetch(webpPath, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        element.style.backgroundImage = `url('${webpPath}')`;
                    } else {
                        element.style.backgroundImage = `url('${src}')`;
                    }
                    
                    // Clean up data attributes
                    element.removeAttribute('data-src');
                    element.removeAttribute('data-background');
                })
                .catch(() => {
                    element.style.backgroundImage = `url('${src}')`;
                    element.removeAttribute('data-src');
                    element.removeAttribute('data-background');
                });
        } else {
            element.style.backgroundImage = `url('${src}')`;
            element.removeAttribute('data-src');
            element.removeAttribute('data-background');
        }
    }
    
    // Initialize lazy loading
    initLazyLoading();
});