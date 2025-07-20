// Lightbox accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Get lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (!lightbox || !lightboxImg || !closeBtn) return;
    
    // Add proper ARIA attributes
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image lightbox');
    lightbox.setAttribute('aria-hidden', 'true');
    
    closeBtn.setAttribute('aria-label', 'Close lightbox');
    closeBtn.setAttribute('tabindex', '0');
    closeBtn.setAttribute('role', 'button');
    
    // Add keyboard navigation
    let currentIndex = 0;
    
    // Make portfolio items focusable
    portfolioItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View ${item.querySelector('h3')?.textContent || 'image'}`);
        
        // Open lightbox on Enter/Space key
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                currentIndex = index;
                openLightbox(index);
            }
        });
    });
    
    // Function to open lightbox
    function openLightbox(index) {
        const imageUrls = [
            'Wallpaper/IMG_20240531_182636110.jpg',
            'Wallpaper/IMG_20241011_203636007.jpg',
            'Wallpaper/IMG_20220604_093032988_BURST000_COVER-01.jpeg',
            'Wallpaper/IMG_20241011_201905158.jpg',
            'Wallpaper/IMG_20220316_142405328-01.jpeg',
            'Wallpaper/IMG_20240607_181102529~2.jpg'
        ];
        
        lightboxImg.src = imageUrls[index];
        lightboxImg.alt = portfolioItems[index].querySelector('h3')?.textContent || 'Photography image';
        
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.classList.add('show');
            lightbox.setAttribute('aria-hidden', 'false');
            
            // Focus the close button
            closeBtn.focus();
            
            // Trap focus inside lightbox
            trapFocus();
        }, 10);
    }
    
    // Function to close lightbox
    function closeLightbox() {
        lightbox.classList.remove('show');
        lightbox.setAttribute('aria-hidden', 'true');
        
        setTimeout(() => {
            lightbox.style.display = 'none';
            
            // Return focus to the portfolio item that was clicked
            portfolioItems[currentIndex].focus();
        }, 400);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
        
        // Navigate with arrow keys when lightbox is open
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                currentIndex = (currentIndex + 1) % portfolioItems.length;
                lightboxImg.src = imageUrls[currentIndex];
                lightboxImg.alt = portfolioItems[currentIndex].querySelector('h3')?.textContent || 'Photography image';
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                currentIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
                lightboxImg.src = imageUrls[currentIndex];
                lightboxImg.alt = portfolioItems[currentIndex].querySelector('h3')?.textContent || 'Photography image';
            }
        }
    });
    
    // Close button events
    closeBtn.addEventListener('click', closeLightbox);
    closeBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeLightbox();
        }
    });
    
    // Close when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Focus trap for accessibility
    function trapFocus() {
        // Only the close button should be focusable in the lightbox
        const focusableElements = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        lightbox.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                // If only one focusable element, just prevent default behavior
                if (focusableElements.length === 1) {
                    e.preventDefault();
                    return;
                }
                
                // Handle tab and shift+tab to trap focus
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    }
});