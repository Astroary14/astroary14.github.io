# GoDaddy Hosting Setup Guide

This guide provides detailed instructions for setting up your ARY Photography website on GoDaddy hosting.

## Step 1: Prepare Your Files (Already Done)

You've already run the `prepare-for-upload.bat` script which created a clean `deployment-package` folder with all necessary files.

## Step 2: Log in to GoDaddy

1. Go to [godaddy.com](https://www.godaddy.com/)
2. Click "Sign In" in the top-right corner
3. Enter your email/username and password

## Step 3: Access cPanel

1. After logging in, go to "My Products"
2. Find your hosting plan and click "Manage"
3. Look for "cPanel" and click it
4. Enter your cPanel username and password if prompted

## Step 4: Upload Your Website Files

### Using File Manager:

1. In cPanel, find and click "File Manager"
2. Navigate to the `public_html` folder
3. If there are any existing files (like index.html), you may want to delete them
4. Click "Upload" at the top
5. Select all files and folders from your `deployment-package` folder
6. Wait for the upload to complete

### Using FTP (Alternative Method):

1. In cPanel, find "FTP Accounts"
2. Create an FTP account or note the existing one
3. Download and install FileZilla (free FTP client)
4. Connect to your server using:
   - Host: your domain or FTP hostname from cPanel
   - Username: your FTP username
   - Password: your FTP password
   - Port: 21
5. Navigate to the `public_html` directory on the right side
6. Navigate to your `deployment-package` folder on the left side
7. Select all files and folders and drag them to the right side

## Step 5: Set File Permissions

1. In File Manager, select all files
2. Click "Permissions" (or right-click and select "Permissions")
3. Set file permissions to 644 (Owner: read/write, Group: read, World: read)
4. Click "Change Permissions"
5. Select all folders
6. Set folder permissions to 755 (Owner: read/write/execute, Group: read/execute, World: read/execute)
7. Click "Change Permissions"

## Step 6: Set Up SSL Certificate

1. In cPanel, search for "SSL/TLS" or look under "Security"
2. Click "Let's Encrypt SSL"
3. Select your domain from the list
4. Click "Issue Certificate"
5. Wait for the certificate to be issued (usually takes a few minutes)

## Step 7: Set Up Redirects (Optional but Recommended)

To ensure all visitors use the secure version of your site:

1. In cPanel, find "Redirects"
2. Set up a redirect:
   - Type: Permanent (301)
   - From: http://yourdomain.com/
   - To: https://yourdomain.com/
   - Wild Card: checked
3. Click "Add"
4. Repeat for www version if needed

## Step 8: Test Your Website

1. Open a web browser and enter your domain (e.g., aryphotography18.com)
2. Your website should now be visible
3. Test all pages and features:
   - Navigation menu
   - Portfolio images
   - Contact form
   - Mobile responsiveness

## Step 9: Set Up Email (Optional)

If you want to use your domain for email (e.g., contact@aryphotography18.com):

1. In cPanel, find "Email Accounts"
2. Click "Create"
3. Enter your desired email address and password
4. Set mailbox quota as needed
5. Click "Create"

## Troubleshooting

### Website Not Appearing
- It may take 24-48 hours for DNS changes to propagate
- Check that index.html is in the public_html directory
- Verify domain is pointing to the correct nameservers

### Images Not Loading
- Check file paths in the HTML
- Verify image files were uploaded to the correct folders
- Check file permissions (should be 644)

### Contact Form Not Working
- Verify FormSubmit.co is configured correctly
- Check email address in form action

### SSL Certificate Issues
- Make sure domain is fully propagated before installing SSL
- Try reinstalling the certificate
- Contact GoDaddy support if issues persist

## Getting Help

If you encounter any issues:

1. GoDaddy Support: 
   - Phone: (480) 505-8877
   - Chat: Available through your GoDaddy account dashboard
   - Help Center: [help.godaddy.com](https://help.godaddy.com)

2. Check the GoDaddy Help Center for tutorials and guides on specific topics