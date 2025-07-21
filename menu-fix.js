// Simple hamburger menu fix
window.onload = function() {
    // Get the hamburger button and navigation menu
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        // Ensure hamburger button is visible with just the three lines
        hamburger.style.display = 'flex';
        hamburger.style.background = 'transparent';
        hamburger.style.border = 'none';
        
        // Make sure spans inside hamburger are visible
        var spans = hamburger.querySelectorAll('span');
        for (var i = 0; i < spans.length; i++) {
            spans[i].style.display = 'block';
            spans[i].style.backgroundColor = '#ffffff';
        }
        
        // Direct click handler
        hamburger.onclick = function() {
            // Toggle hamburger appearance
            this.classList.toggle('active');
            
            // Toggle menu visibility with smooth animation
            if (navMenu.style.display === 'none' || navMenu.style.display === '') {
                // Show menu with animation
                navMenu.style.display = 'flex';
                navMenu.style.opacity = '0';
                navMenu.style.right = '-350px';
                
                // Trigger animation
                setTimeout(function() {
                    navMenu.style.transition = 'all 0.3s ease-in-out';
                    navMenu.style.opacity = '1';
                    navMenu.style.right = '0';
                }, 10);
            } else {
                // Hide menu with animation
                navMenu.style.transition = 'all 0.3s ease-in-out';
                navMenu.style.opacity = '0';
                navMenu.style.right = '-350px';
                
                // Hide after animation completes
                setTimeout(function() {
                    navMenu.style.display = 'none';
                }, 300);
            }
            
            return false;
        };
        
        // Add click handlers to menu links
        var menuLinks = navMenu.querySelectorAll('a');
        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].onclick = function() {
                // Hide menu with animation
                navMenu.style.transition = 'all 0.3s ease-in-out';
                navMenu.style.opacity = '0';
                navMenu.style.right = '-350px';
                
                // Hide after animation completes
                setTimeout(function() {
                    navMenu.style.display = 'none';
                }, 300);
                
                hamburger.classList.remove('active');
            };
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            // Check if menu is open
            if (navMenu.style.display === 'flex' && navMenu.style.opacity === '1') {
                // Check if click is outside menu and not on hamburger
                if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                    // Hide menu with animation
                    navMenu.style.transition = 'all 0.3s ease-in-out';
                    navMenu.style.opacity = '0';
                    navMenu.style.right = '-350px';
                    
                    // Hide after animation completes
                    setTimeout(function() {
                        navMenu.style.display = 'none';
                    }, 300);
                    
                    hamburger.classList.remove('active');
                }
            }
        });
    }
};