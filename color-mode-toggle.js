/**
 * Color Mode Toggle
 * Switches between color mode and black & white mode
 */

document.addEventListener('DOMContentLoaded', function() {
    // Find the hamburger menu and Instagram container
    const navMenu = document.getElementById('nav-menu');
    const instagramContainer = navMenu.querySelector('div[style*="width: 100%; padding: 20px 0"]');
    
    // Create toggle button
    const toggle = document.createElement('div');
    toggle.className = 'mode-toggle';
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('aria-label', 'Toggle color mode');
    toggle.setAttribute('tabindex', '0');
    toggle.style.position = 'static';
    toggle.style.margin = '15px auto';
    toggle.style.width = 'fit-content';
    toggle.style.background = 'rgba(0, 0, 0, 0.5)';
    toggle.style.padding = '10px 20px';
    toggle.style.borderRadius = '25px';
    toggle.style.cursor = 'pointer';
    
    // Create toggle icon
    const icon = document.createElement('span');
    icon.className = 'toggle-icon';
    icon.innerHTML = '🎨';
    icon.style.marginRight = '8px';
    
    // Create toggle text
    const text = document.createElement('span');
    text.className = 'toggle-text';
    text.textContent = 'Color Mode';
    text.style.fontWeight = 'bold';
    
    // Assemble toggle
    toggle.appendChild(icon);
    toggle.appendChild(text);
    
    // Insert before Instagram button
    if (instagramContainer && instagramContainer.parentNode) {
        instagramContainer.parentNode.insertBefore(toggle, instagramContainer);
    } else {
        // Fallback if Instagram container not found
        navMenu.appendChild(toggle);
    }
    
    // Check for saved preference
    const savedMode = localStorage.getItem('colorMode');
    if (savedMode === 'bw') {
        document.body.classList.add('bw-mode');
        icon.innerHTML = '◐';
        text.textContent = 'B&W';
    }
    
    // Toggle functionality
    toggle.addEventListener('click', toggleColorMode);
    toggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleColorMode();
        }
    });
    
    function toggleColorMode() {
        const isBWMode = document.body.classList.toggle('bw-mode');
        
        if (isBWMode) {
            // Switch to B&W mode
            icon.innerHTML = '◐';
            text.textContent = 'B&W';
            toggle.style.background = '#ffffff';
            toggle.style.color = '#000000';
            toggle.style.border = '1px solid #000000';
            
            // Update menu text color in B&W mode
            if (document.body.classList.contains('bw-mode')) {
                const navMenu = document.getElementById('nav-menu');
                if (navMenu) {
                    navMenu.style.background = 'rgba(255, 255, 255, 0.9)';
                }
            }
            localStorage.setItem('colorMode', 'bw');
            
            // Update fireflies to B&W
            updateFireflies(true);
        } else {
            // Switch to color mode
            icon.innerHTML = '🎨';
            text.textContent = 'Color';
            toggle.style.background = 'rgba(0, 0, 0, 0.7)';
            toggle.style.color = '#ffffff';
            toggle.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            
            // Reset menu background in color mode
            const navMenu = document.getElementById('nav-menu');
            if (navMenu) {
                navMenu.style.background = '';
            }
            localStorage.setItem('colorMode', 'color');
            
            // Update fireflies to color
            updateFireflies(false);
        }
    }
    
    // Function to update firefly colors
    function updateFireflies(isBW) {
        // This will be handled by the observer in the natural-fireflies.js file
        window.fireflyMode = isBW ? 'bw' : 'color';
        
        // Dispatch custom event that the firefly script can listen for
        document.dispatchEvent(new CustomEvent('fireflyModeChange', { 
            detail: { mode: window.fireflyMode }
        }));
    }
});