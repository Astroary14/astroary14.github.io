# Deployment Checklist for GoDaddy

## Before Uploading

- [x] Run `prepare-for-upload.bat` to create a clean deployment package
- [ ] Verify all files are in the `deployment-package` folder
- [ ] Check that `index.html` is in the root of the package
- [ ] Ensure all image paths use relative URLs (e.g., `Wallpaper/image.jpg`)
- [ ] Confirm all script and CSS paths are correct
- [ ] Test the site locally one last time

## Essential Files to Upload

These files must be uploaded to your GoDaddy hosting:

### Root Files
- `index.html` - Main page
- `manifest.json` - PWA configuration
- `sw.js` - Service worker for offline support
- `offline.html` - Offline fallback page
- `.htaccess` - Server configuration
- `privacy-policy.html` - Privacy policy
- `security-policy.html` - Security policy
- `1000114679.png` - Logo
- `bg.mp4` - Background video
- `logo.png` - Logo image

### JavaScript Files
- `menu-fix.js` - Hamburger menu functionality
- `portfolio-scroll.js` - Portfolio scrolling
- `natural-fireflies.js` - Firefly animation
- `lazy-loader.js` - Image lazy loading
- `lightbox-a11y.js` - Accessible lightbox
- `image-protection.js` - Image protection
- `cookie-consent.js` - GDPR cookie consent

### Directories
- `css/` - Stylesheets
- `js/` - Core JavaScript files
- `Wallpaper/` - Photography images
- `icons/` - PWA icons
- `.well-known/` - Security files

## After Uploading

- [ ] Visit your domain to verify the site loads correctly
- [ ] Test the hamburger menu functionality
- [ ] Check that images load properly
- [ ] Test the portfolio section
- [ ] Verify the contact form works
- [ ] Test on mobile devices
- [ ] Set up SSL certificate in GoDaddy cPanel

## Common Issues & Solutions

1. **Images not showing**
   - Check file paths in HTML
   - Verify image files were uploaded to correct folders
   - Check file permissions (should be 644)

2. **Hamburger menu not working**
   - Verify all JavaScript files were uploaded
   - Check browser console for errors

3. **404 errors**
   - Make sure all linked files exist in the correct locations
   - Check for case sensitivity in filenames

4. **Contact form not working**
   - Verify FormSubmit.co is configured correctly
   - Check email address in form action

5. **SSL certificate issues**
   - Install Let's Encrypt certificate through cPanel
   - Update any hard-coded http:// URLs to https://