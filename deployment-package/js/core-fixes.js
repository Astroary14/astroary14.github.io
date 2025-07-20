// Fix for hamburger menu and logo functionality
document.addEventListener('DOMContentLoaded', function() {
    // Fix hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
    
    // Fix logo click functionality
    const logo = document.querySelector('.nav-logo img');
    if (logo) {
        // Remove any existing onclick attribute
        logo.removeAttribute('onclick');
        
        // Add our event listener
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Make sure the logo is clickable
        logo.style.cursor = 'pointer';
        logo.style.pointerEvents = 'auto';
    }
});