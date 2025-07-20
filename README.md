# ARY Photography Website

A professional photography website inspired by modern gaming websites like Rockstar Games VI.

## 📁 Project Structure
```
aryphotography-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styling
├── js/
│   └── script.js      # Interactive functionality
├── images/            # Your photos go here
└── README.md          # This file
```

## 🚀 Getting Started

### Step 1: Test Locally
1. Open `index.html` in your web browser
2. The website should load with a dark theme and smooth animations

### Step 2: Add Your Photos
1. Place your best photos in the `images/` folder
2. Update the CSS file to use your actual images:
   - Replace placeholder backgrounds in `.portfolio-image` sections
   - Add your profile photo for the about section

### Step 3: Customize Content
Edit `index.html` to update:
- Your name and branding
- Contact information (email, phone)
- Portfolio descriptions
- About section text
- Services offered

### Step 4: Upload to Your Domain

#### Option A: Using cPanel (Most Common)
1. Log into your hosting provider's cPanel
2. Open "File Manager"
3. Navigate to `public_html` folder
4. Upload all files from your project folder
5. Your site will be live at www.aryphotography18.com

#### Option B: Using FTP
1. Download an FTP client like FileZilla
2. Get FTP credentials from your hosting provider
3. Connect and upload files to the root directory

## 🎨 Customization Guide

### Colors
The main colors used are:
- Primary: `#ff6b35` (Orange)
- Background: `#000000` (Black)
- Secondary: `#1a1a1a` (Dark Gray)

To change colors, search and replace these hex codes in `style.css`.

### Fonts
Currently using Google Fonts 'Roboto'. To change:
1. Update the Google Fonts link in `index.html`
2. Change `font-family` in `style.css`

### Images
Replace placeholder backgrounds with your photos:
```css
.portfolio-image {
    background: url('../images/your-photo.jpg') center/cover;
}
```

## 📱 Features Included

- ✅ Responsive design (mobile-friendly)
- ✅ Smooth scrolling navigation
- ✅ Animated hero section
- ✅ Portfolio grid with hover effects
- ✅ Contact form
- ✅ Mobile hamburger menu
- ✅ Parallax scrolling effects
- ✅ Loading animations

## 🔧 Advanced Customizations

### Adding More Portfolio Items
Copy this HTML structure in the portfolio section:
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <div class="portfolio-overlay">
            <h3>Your Title</h3>
            <p>Your description</p>
        </div>
    </div>
</div>
```

### Adding New Sections
1. Add HTML structure
2. Add corresponding CSS styling
3. Update navigation menu

### Making the Contact Form Work
The form currently shows an alert. To make it functional:
1. Use a service like Formspree or Netlify Forms
2. Or add server-side processing (PHP/Node.js)

## 🌐 Going Live Checklist

- [ ] Test website locally
- [ ] Add your actual photos
- [ ] Update all text content
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Upload to hosting provider
- [ ] Test live website
- [ ] Set up SSL certificate (HTTPS)

## 📞 Need Help?

Common issues and solutions:

**Website not loading:**
- Check file paths are correct
- Ensure all files are uploaded
- Check hosting provider settings

**Images not showing:**
- Verify image file paths
- Check image file formats (JPG, PNG, WebP)
- Ensure images are in the correct folder

**Mobile menu not working:**
- Check JavaScript file is loaded
- Test in different browsers

## 🎯 Next Steps

1. **SEO Optimization**: Add meta descriptions, alt tags for images
2. **Analytics**: Add Google Analytics tracking
3. **Performance**: Optimize images for web
4. **Social Media**: Add social media links
5. **Blog**: Consider adding a blog section
6. **Booking System**: Integrate online booking

## 📈 Performance Tips

- Compress images before uploading
- Use WebP format for better compression
- Enable caching through your hosting provider
- Consider using a CDN for faster loading

Your website is now ready to go live! 🚀