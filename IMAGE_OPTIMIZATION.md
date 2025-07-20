# Image Optimization Guide

This guide explains how to optimize images on the ARY Photography website for better performance.

## WebP Conversion

The website now supports WebP images, which are typically 25-35% smaller than JPEG or PNG files with the same visual quality. This helps your website load faster.

### How to Convert Images to WebP

1. **Automatic Conversion (Recommended)**

   We've included a Node.js script that automatically converts all your images to WebP format:

   ```bash
   # Install required package
   npm install sharp

   # Run the conversion script
   node convert-to-webp.js
   ```

   This will:
   - Convert all images in the `Wallpaper` folder to WebP format
   - Save them in `Wallpaper/optimized` folder
   - Create smaller versions for mobile devices
   - Maintain the original files untouched

2. **Manual Conversion**

   If you prefer to convert images manually, you can use:
   
   - [Squoosh](https://squoosh.app/) - Browser-based tool
   - [WebP converter](https://developers.google.com/speed/webp/download) - Command line tool
   - Adobe Photoshop with WebP plugin

## How the Lazy Loading Works

The website now includes a lazy loading system that:

1. Only loads images when they're about to come into view
2. Automatically uses WebP images when the browser supports them
3. Falls back to original formats (JPG/PNG) when WebP isn't supported
4. Loads smaller images on mobile devices

## Adding New Images

When adding new images to the website:

1. Place the original image in the `Wallpaper` folder
2. Run the conversion script to generate WebP versions
3. Use the `data-src` attribute for regular images:
   ```html
   <img data-src="Wallpaper/your-image.jpg" alt="Description">
   ```
4. Use the `data-background` attribute for background images:
   ```html
   <div class="your-element" data-background="Wallpaper/your-image.jpg"></div>
   ```

The lazy loading system will automatically:
- Load the image only when needed
- Choose the right format (WebP or original)
- Choose the right size based on the device

## Benefits

- Faster page loading
- Lower bandwidth usage
- Better user experience
- Improved SEO (Google prefers fast-loading pages)
- Lower hosting costs