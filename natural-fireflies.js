// Natural firefly behavior
window.addEventListener('load', function() {
    // Wait for loading screen to disappear
    setTimeout(initFireflies, 3500);
});

function initFireflies() {
    // Check if we're on a mobile device
    const isMobile = window.innerWidth <= 768;
    
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    
    // Reduce opacity on mobile
    if (isMobile) {
        canvas.style.opacity = '0.5';
    }
    
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const ctx = canvas.getContext('2d');
    
    // Target buttons
    const buttons = [
        document.querySelector('a.hero-button'),
        document.querySelector('button.submit-btn'),
        document.querySelector('a.instagram-link')
    ].filter(btn => btn !== null);
    
    console.log('Found buttons:', buttons.length);
    
    // Create fireflies - reduce count on mobile
    const fireflies = [];
    const maxFirefliesPerButton = isMobile ? 1 : 3; // Fewer fireflies on mobile
    
    buttons.forEach(button => {
        // Reduced fireflies per button
        const count = Math.floor(Math.random() * (maxFirefliesPerButton + 1));
        
        for (let i = 0; i < count; i++) {
            const rect = button.getBoundingClientRect();
            // Random position along button
            const position = Math.random();
            
            fireflies.push({
                button: button,
                x: rect.left + rect.width * position,
                y: rect.top - (5 + Math.random() * 10),
                size: 8,
                brightness: 1.0,
                pulseSpeed: 0.1 + Math.random() * 0.1,
                pulsePhase: Math.random() * Math.PI * 2,
                state: 'perched', // perched, fleeing, returning
                fleeX: 0,
                fleeY: 0,
                fleeSpeed: 0,
                wanderPhaseX: Math.random() * Math.PI * 2,
                wanderPhaseY: Math.random() * Math.PI * 2,
                wanderSpeed: Math.random() * 0.01 + 0.005,
                homeX: rect.left + rect.width * position,
                homeY: rect.top - 8,
                visible: true
            });
        }
        
        // Add hover event - fireflies fly away permanently
        button.addEventListener('mouseenter', function() {
            const buttonFireflies = fireflies.filter(f => f.button === this);
            
            buttonFireflies.forEach(firefly => {
                if (firefly.visible) {
                    firefly.state = 'fleeing';
                    
                    // Fly far away in random direction
                    const angle = Math.random() * Math.PI * 2;
                    const distance = window.innerWidth * 2; // Fly far off screen
                    
                    firefly.fleeX = firefly.x + Math.cos(angle) * distance;
                    firefly.fleeY = firefly.y + Math.sin(angle) * distance;
                    firefly.fleeSpeed = 3 + Math.random() * 3;
                    
                    // Make firefly disappear permanently after flying away
                    setTimeout(() => {
                        firefly.visible = false;
                        firefly.permanent = true; // Mark as permanently gone
                    }, 2000 + Math.random() * 1000);
                }
            });
        });
        
        // No mouseleave event - fireflies don't come back
    });
    
    // Animation loop
    function animate() {
        // Skip frames on mobile for better performance
        if (isMobile && Math.random() > 0.7) {
            requestAnimationFrame(animate);
            return;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const now = Date.now() / 1000;
        
        // Update fireflies
        fireflies.forEach(firefly => {
            if (!firefly.visible || firefly.permanent) return;
            
            // Update position based on state
            if (firefly.state === 'perched') {
                // Update position if button moved (scrolling)
                const rect = firefly.button.getBoundingClientRect();
                const buttonFireflies = fireflies.filter(f => f.button === firefly.button && f.visible);
                const index = buttonFireflies.indexOf(firefly);
                const count = buttonFireflies.length;
                // Keep original random position
                const position = firefly.homeX ? (firefly.homeX - rect.left) / rect.width : Math.random();
                
                firefly.x = rect.left + rect.width * position;
                firefly.y = rect.top - 8;
                firefly.homeX = firefly.x;
                firefly.homeY = firefly.y;
                
                // Add slight hovering movement
                firefly.x += Math.sin(now * 2 + firefly.pulsePhase) * 1;
                firefly.y += Math.cos(now * 1.5 + firefly.pulsePhase) * 0.5;
                
            } else if (firefly.state === 'fleeing') {
                // Move away with natural wandering
                const dx = firefly.fleeX - firefly.x;
                const dy = firefly.fleeY - firefly.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist > 10) {
                    // Add wandering to flight path
                    firefly.wanderPhaseX += firefly.wanderSpeed;
                    firefly.wanderPhaseY += firefly.wanderSpeed;
                    
                    const wanderX = Math.sin(firefly.wanderPhaseX) * 2;
                    const wanderY = Math.sin(firefly.wanderPhaseY) * 2;
                    
                    firefly.x += (dx / dist) * firefly.fleeSpeed + wanderX;
                    firefly.y += (dy / dist) * firefly.fleeSpeed + wanderY;
                }
                
            } else if (firefly.state === 'returning') {
                // Return home with natural wandering
                const dx = firefly.homeX - firefly.x;
                const dy = firefly.homeY - firefly.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist > 5) {
                    // Add wandering to return path
                    firefly.wanderPhaseX += firefly.wanderSpeed;
                    firefly.wanderPhaseY += firefly.wanderSpeed;
                    
                    const wanderX = Math.sin(firefly.wanderPhaseX) * 3;
                    const wanderY = Math.sin(firefly.wanderPhaseY) * 3;
                    
                    const speed = 1 + Math.min(dist / 100, 5); // Faster when far away
                    
                    firefly.x += (dx / dist) * speed + wanderX;
                    firefly.y += (dy / dist) * speed + wanderY;
                } else {
                    firefly.state = 'perched';
                }
            }
            
            // Calculate pulsing brightness
            const pulse = Math.sin(now * firefly.pulseSpeed * 10 + firefly.pulsePhase) * 0.4 + 0.6;
            const brightness = firefly.brightness * pulse;
            
            // Draw firefly with glow effect
            const gradient = ctx.createRadialGradient(
                firefly.x, firefly.y, 0, 
                firefly.x, firefly.y, firefly.size * 4
            );
            
            gradient.addColorStop(0, `rgba(255, 255, 150, ${brightness})`);
            gradient.addColorStop(0.3, `rgba(255, 200, 100, ${brightness * 0.7})`);
            gradient.addColorStop(1, 'rgba(255, 150, 50, 0)');
            
            ctx.beginPath();
            ctx.arc(firefly.x, firefly.y, firefly.size * 4, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Draw bright center
            ctx.beginPath();
            ctx.arc(firefly.x, firefly.y, firefly.size / 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 200, ${brightness})`;
            ctx.fill();
            
            // Add a white highlight for extra visibility
            ctx.beginPath();
            ctx.arc(firefly.x, firefly.y, firefly.size / 4, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}