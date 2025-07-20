/**
 * Mobile-specific fixes for ARY Photography website
 * This script handles mobile-specific behaviors without affecting desktop experience
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a mobile device
    const isMobile = window.innerWidth <= 768;
    
    // Improve performance on mobile devices
    if (isMobile) {
        // Reduce particle count for better performance
        if (window.fireflyCount) {
            window.fireflyCount = Math.min(window.fireflyCount, 15);
        }
        
        // Disable complex animations
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @media (max-width: 768px) {
                /* Simplify animations for better performance */
                .hero-button::after, .submit-btn::before, .instagram-link::after {
                    display: none !important;
                }
                
                /* Reduce animation complexity */
                @keyframes gradientAnimation {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 0% 100%; }
                }
                
                /* Simplify background animations */
                body {
                    animation: gradientAnimation 120s ease infinite !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    if (isMobile) {
        // Fix portfolio scrolling on mobile
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (portfolioGrid) {
            portfolioGrid.style.transform = 'none';
            portfolioGrid.style.width = '100%';
        }
        
        // Adjust hero section padding on mobile
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.paddingTop = '80px';
        }
        
        // Make hamburger menu more responsive
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            // Ensure menu takes full width on mobile
            navMenu.style.width = '100%';
            
            // Improve touch response
            hamburger.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
            }, { passive: false });
        }
        
        // Fix lightbox for better mobile experience
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        
        if (lightbox && lightboxImg) {
            // Add touch swipe capability for lightbox
            let touchStartX = 0;
            let touchEndX = 0;
            
            lightbox.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            lightbox.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
            
            function handleSwipe() {
                const currentIndex = getCurrentImageIndex();
                const portfolioItems = document.querySelectorAll('.portfolio-item');
                const imageUrls = Array.from(portfolioItems).map((item, i) => {
                    const portfolioImage = item.querySelector('.portfolio-image');
                    return portfolioImage ? portfolioImage.getAttribute('data-src') : null;
                }).filter(url => url);
                
                // Minimum distance for swipe
                const minSwipeDistance = 50;
                const swipeDistance = touchEndX - touchStartX;
                
                if (swipeDistance > minSwipeDistance && currentIndex > 0) {
                    // Swipe right - previous image
                    lightboxImg.src = imageUrls[currentIndex - 1];
                } else if (swipeDistance < -minSwipeDistance && currentIndex < imageUrls.length - 1) {
                    // Swipe left - next image
                    lightboxImg.src = imageUrls[currentIndex + 1];
                }
            }
            
            function getCurrentImageIndex() {
                const currentSrc = lightboxImg.src;
                const portfolioItems = document.querySelectorAll('.portfolio-item');
                const imageUrls = Array.from(portfolioItems).map((item, i) => {
                    const portfolioImage = item.querySelector('.portfolio-image');
                    return portfolioImage ? portfolioImage.getAttribute('data-src') : null;
                }).filter(url => url);
                
                return imageUrls.findIndex(url => currentSrc.includes(url));
            }
        }
    }
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        // Wait for orientation change to complete
        setTimeout(function() {
            // Refresh portfolio layout
            const portfolioGrid = document.querySelector('.portfolio-grid');
            if (portfolioGrid && window.innerWidth <= 768) {
                portfolioGrid.style.transform = 'none';
                portfolioGrid.style.width = '100%';
            }
        }, 300);
    });
});