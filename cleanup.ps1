# PowerShell script to clean up unnecessary files
Write-Host "Cleaning up unnecessary files..." -ForegroundColor Green

# Test Files
Remove-Item -Path "test-fixes.html" -ErrorAction SilentlyContinue
Remove-Item -Path "test-hamburger-simple.html" -ErrorAction SilentlyContinue
Remove-Item -Path "test-hamburger.html" -ErrorAction SilentlyContinue

# Duplicate/Unused JavaScript
Remove-Item -Path "button-birds.js" -ErrorAction SilentlyContinue
Remove-Item -Path "button-fireflies-fixed.js" -ErrorAction SilentlyContinue
Remove-Item -Path "button-fireflies.js" -ErrorAction SilentlyContinue
Remove-Item -Path "fixed-birds.js" -ErrorAction SilentlyContinue
Remove-Item -Path "hamburger-final.js" -ErrorAction SilentlyContinue
Remove-Item -Path "hamburger-fix.js" -ErrorAction SilentlyContinue
Remove-Item -Path "hamburger-menu.js" -ErrorAction SilentlyContinue
Remove-Item -Path "hamburger-simple.js" -ErrorAction SilentlyContinue
Remove-Item -Path "improved-fireflies.js" -ErrorAction SilentlyContinue
Remove-Item -Path "inline-logo.js" -ErrorAction SilentlyContinue
Remove-Item -Path "simple-fireflies.js" -ErrorAction SilentlyContinue
Remove-Item -Path "visible-birds.js" -ErrorAction SilentlyContinue
Remove-Item -Path "visible-fireflies.js" -ErrorAction SilentlyContinue

# Unused CSS
Remove-Item -Path "fix-nav.css" -ErrorAction SilentlyContinue
Remove-Item -Path "hamburger-fix.css" -ErrorAction SilentlyContinue
Remove-Item -Path "hamburger-simple.css" -ErrorAction SilentlyContinue
Remove-Item -Path "instagram-menu.css" -ErrorAction SilentlyContinue
Remove-Item -Path "nav-menu.css" -ErrorAction SilentlyContinue

# Development Files
Remove-Item -Path "cleanup-updated.bat" -ErrorAction SilentlyContinue
Remove-Item -Path "prepare-for-upload.bat" -ErrorAction SilentlyContinue
Remove-Item -Path "server.js" -ErrorAction SilentlyContinue
Remove-Item -Path "package.json" -ErrorAction SilentlyContinue
Remove-Item -Path "convert-to-webp.js" -ErrorAction SilentlyContinue
Remove-Item -Path "generate-icons.js" -ErrorAction SilentlyContinue
Remove-Item -Path "send-email.php" -ErrorAction SilentlyContinue

# Remove -p directory if it exists
if (Test-Path "-p") {
    Remove-Item -Path "-p" -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "Cleanup complete! Your website files are now optimized for deployment." -ForegroundColor Green
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")