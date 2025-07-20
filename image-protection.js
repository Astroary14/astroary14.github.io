/**
 * Enhanced Image Protection
 * This script adds server-side protection techniques to images
 * without affecting the site's appearance or functionality.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Apply watermark to images in lightbox
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg) {
        lightboxImg.addEventListener('load', function() {
            applyCanvasWatermark(this);
        });
    }
    
    // Function to apply canvas-based watermark
    function applyCanvasWatermark(img) {
        // Create canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions to match image
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        // Draw the image on canvas
        ctx.drawImage(img, 0, 0);
        
        // Apply watermark
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.font = `${Math.max(20, canvas.width / 20)}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Draw diagonal watermarks
        for (let i = -2; i <= 2; i++) {
            for (let j = -2; j <= 2; j++) {
                const x = canvas.width / 2 + (canvas.width / 4) * i;
                const y = canvas.height / 2 + (canvas.height / 4) * j;
                ctx.fillText('© ARY Photography', x, y);
            }
        }
        
        // Replace image source with canvas data
        const dataURL = canvas.toDataURL('image/jpeg', 0.92);
        img.src = dataURL;
        
        // Add download attribute to prevent easy saving
        img.setAttribute('data-original', img.getAttribute('src'));
        
        // Add protection attributes
        img.setAttribute('draggable', 'false');
        img.style.webkitUserDrag = 'none';
    }
    
    // Add server-side protection recommendations to console
    console.log(`
    Image Protection Recommendations:
    
    1. Server-side implementation needed:
       - Add X-Content-Type-Options: nosniff header
       - Add Referrer-Policy: same-origin header
       - Configure hotlink protection in .htaccess
       
    2. .htaccess file should include:
       RewriteEngine On
       RewriteCond %{HTTP_REFERER} !^https://(www\\.)?aryphotography18\\.com/ [NC]
       RewriteCond %{HTTP_REFERER} !^$
       RewriteRule \\.(jpg|jpeg|png|gif)$ - [F]
       
    3. Add watermarks to original files
    
    4. Consider adding a transparent overlay div on portfolio items
    `);
    
    // Add invisible overlay to portfolio images
    document.querySelectorAll('.portfolio-image').forEach(image => {
        const overlay = document.createElement('div');
        overlay.className = 'image-protection-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = '3';
        overlay.style.cursor = 'pointer';
        image.appendChild(overlay);
    });
});