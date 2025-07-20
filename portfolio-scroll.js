// Portfolio scroll animation fix
document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const portfolioSection = document.getElementById('portfolio');
    
    // Check if we're on a mobile device
    const isMobile = window.innerWidth <= 768;
    
    if (portfolioSection && portfolioGrid) {
        // On mobile, disable scroll animation completely
        if (isMobile) {
            portfolioGrid.style.transform = 'none';
            portfolioGrid.style.width = '100%';
            portfolioGrid.style.display = 'flex';
            portfolioGrid.style.flexDirection = 'column';
            portfolioGrid.style.alignItems = 'center';
            return; // Exit early, don't set up scroll listener
        }
        // Set initial position to show first placard
        portfolioGrid.style.transform = 'translateX(40%)';
        
        // Update scroll animation
        window.addEventListener('scroll', function() {
            const sectionRect = portfolioSection.getBoundingClientRect();
            
            if (sectionRect.top <= 0) {
                const wrapperRect = document.querySelector('.portfolio-wrapper').getBoundingClientRect();
                // Use smaller range for scroll progress to make items appear faster
                const scrollProgress = Math.max(0, Math.min(1, Math.abs(wrapperRect.top) / (wrapperRect.height * 0.5)));
                // Start from 40% (showing first placard) and move to -80% (showing all placards)
                const translateX = 40 - (scrollProgress * 120);
                portfolioGrid.style.transform = `translateX(${translateX}%)`;
            }
        });
    }
});