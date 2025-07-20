# Progressive Web App (PWA) Implementation

This document explains the PWA implementation for the ARY Photography website, enabling offline viewing capabilities.

## Overview

Progressive Web Apps (PWAs) combine the best of web and mobile apps, allowing users to:

- Install the website as an app on their device
- Access content offline
- Receive push notifications
- Experience faster loading times through caching

## Implementation Details

### Web App Manifest

The `manifest.json` file provides metadata about the application:

- **Name**: "ARY Photography"
- **Short Name**: "ARY Photo" (used on home screens)
- **Description**: Brief description of the site
- **Start URL**: Entry point when launched as an app
- **Display Mode**: "standalone" (looks like a native app)
- **Colors**: Theme and background colors
- **Icons**: Various sizes for different devices and contexts

### Service Worker

The service worker (`sw.js`) enables offline functionality through:

1. **Caching**: Stores key assets during installation
2. **Offline First**: Serves cached content when offline
3. **Cache Management**: Updates caches when new versions are deployed
4. **Fallback Content**: Shows offline page when content isn't cached

### Offline Page

A dedicated offline page (`offline.html`) is shown when:
- The user is offline
- The requested page isn't in the cache

This page:
- Informs users they're offline
- Provides links to cached pages
- Automatically refreshes when connection is restored

### Cached Assets

The following assets are cached for offline use:

- HTML: Main page and offline page
- CSS: Style sheets for layout and design
- JavaScript: Core functionality scripts
- Images: Logo, icons, and key portfolio images
- Manifest: For app installation

## How It Works

1. **First Visit**: 
   - Service worker installs and caches critical assets
   - User browses the site normally

2. **Subsequent Visits**:
   - Service worker intercepts network requests
   - Serves cached content when available
   - Falls back to network for uncached content
   - Updates cache with new content

3. **Offline Mode**:
   - Serves cached content without network
   - Shows offline page for uncached content
   - Displays placeholder images for uncached images

## Testing Offline Functionality

To test the offline capabilities:

1. Visit the site while online
2. Navigate to several pages to cache them
3. Open Chrome DevTools (F12)
4. Go to Application > Service Workers
5. Check "Offline" checkbox
6. Refresh the page or navigate to different sections
7. Observe that the site still works with cached content

## Installation as an App

Users can install the website as an app:

1. **Desktop**: Click the install icon in the address bar
2. **Android**: Tap "Add to Home Screen" from browser menu
3. **iOS**: Tap share icon, then "Add to Home Screen"

## Browser Compatibility

PWA features are supported in:
- Chrome (desktop & mobile)
- Firefox (desktop & mobile)
- Safari (iOS 11.3+)
- Edge (Chromium-based)
- Samsung Internet

## Future Enhancements

Consider these improvements:

1. **Background Sync**: Queue form submissions when offline
2. **Push Notifications**: Alert users about new content
3. **Periodic Sync**: Update cached content in the background
4. **Advanced Caching**: Implement stale-while-revalidate strategy
5. **Workbox Integration**: Use Google's Workbox library for more robust service worker management