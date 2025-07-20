@echo off
echo Cleaning up unnecessary files...

:: Remove test and development files
del "test-fixes.html"
del "test-hamburger-simple.html"
del "test-hamburger.html"
del "cleanup-updated.bat"
del "prepare-for-upload.bat"
del "server.js"
del "package.json"

:: Remove duplicate or unused JavaScript files
del "button-birds.js"
del "button-fireflies-fixed.js"
del "button-fireflies.js"
del "fixed-birds.js"
del "hamburger-final.js"
del "hamburger-fix.js"
del "hamburger-menu.js"
del "hamburger-simple.js"
del "improved-fireflies.js"
del "inline-logo.js"
del "simple-fireflies.js"
del "visible-birds.js"
del "visible-fireflies.js"

:: Remove unused CSS files
del "fix-nav.css"
del "hamburger-fix.css"
del "hamburger-simple.css"
del "instagram-menu.css"
del "nav-menu.css"

:: Remove documentation files (optional - comment these out if you want to keep them)
:: del "CONTACT_FORM_SETUP.md"
:: del "COOKIE_COMPLIANCE.md"
:: del "DEPLOYMENT_CHECKLIST.md"
:: del "GODADDY_SETUP.md"
:: del "IMAGE_OPTIMIZATION.md"
:: del "IMAGE_PROTECTION.md"
:: del "PWA_IMPLEMENTATION.md"
:: del "README.md"
:: del "SECURITY.md"

:: Remove the -p directory if it exists
if exist "-p" rd /s /q "-p"

echo Cleanup complete!
echo Your website files are now optimized for deployment.
pause