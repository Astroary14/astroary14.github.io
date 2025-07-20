/**
 * Portfolio Mobile Fix
 * This script specifically addresses the portfolio section layout on mobile devices
 */

(function() {
    // Execute immediately to avoid FOUC (Flash of Unstyled Content)
    const isMobile = window.innerWidth <= 768;
    
    // Disable scroll-based portfolio animations on mobile
    if (isMobile) {
        // Add this style immediately
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @media (max-width: 768px) {
                /* Fix portfolio section */
                .portfolio-section {
                    height: auto !important;
                    position: relative !important;
                    top: auto !important;
                    padding: 80px 0 40px 0 !important;
                }
                
                .portfolio-wrapper {
                    height: auto !important;
                }
                
                .portfolio-spacer {
                    height: 20px !important;
                    display: none !important;
                }
                
                /* Fix portfolio grid */
                .portfolio-grid {
                    transform: none !important;
                    width: 100% !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    gap: 20px !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    if (isMobile) {
        // Immediately fix portfolio grid on mobile
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (portfolioGrid) {
            portfolioGrid.style.transform = 'none';
            portfolioGrid.style.width = '100%';
            portfolioGrid.style.display = 'flex';
            portfolioGrid.style.flexDirection = 'column';
            portfolioGrid.style.alignItems = 'center';
        }
        
        // Fix portfolio container
        const portfolioContainer = document.querySelector('.portfolio-container');
        if (portfolioContainer) {
            portfolioContainer.style.overflow = 'hidden';
        }
    }
    
    // Add full event listener for when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        if (isMobile) {
            // Override any script-based transformations that might happen after load
            const portfolioGrid = document.querySelector('.portfolio-grid');
            
            if (portfolioGrid) {
                // Create a mutation observer to watch for style changes
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'style') {
                            // Reset transform and width if they get changed by other scripts
                            setTimeout(function() {
                                portfolioGrid.style.transform = 'none';
                                portfolioGrid.style.width = '100%';
                                portfolioGrid.style.display = 'flex';
                                portfolioGrid.style.flexDirection = 'column';
                                portfolioGrid.style.alignItems = 'center';
                            }, 10);
                        }
                    });
                });
                
                // Start observing
                observer.observe(portfolioGrid, { attributes: true });
                
                // Disable any scroll-based animations for the portfolio
                window.addEventListener('scroll', function(e) {
                    portfolioGrid.style.transform = 'none';
                    portfolioGrid.style.width = '100%';
                }, { passive: true });
            }
        }
    });
})();