# Contact Form Setup Instructions

This document explains how to set up the contact form to send emails to aryphotography18@gmail.com.

## Option 1: PHP Setup (Shared Hosting)

If your website is hosted on a shared hosting service with PHP support:

1. Upload the `send-email.php` file to your web server
2. Make sure the form in `index.html` has the correct action: `action="send-email.php"`
3. Test the form by submitting a message

### PHP Requirements:
- PHP 7.0 or higher
- `mail()` function enabled on your hosting server

## Option 2: Node.js Setup (VPS or Node.js Hosting)

If you're using a VPS or Node.js hosting service:

1. Upload all files to your server
2. Install dependencies:
   ```
   npm install
   ```
3. Update the email credentials in `server.js`:
   ```javascript
   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'your-email@gmail.com', // Replace with your email
       pass: 'your-app-password'     // Replace with your app password
     }
   });
   ```
4. Start the server:
   ```
   npm start
   ```
5. Update the form action in `index.html` to point to your server:
   ```html
   <form id="contactForm" action="/send-email" method="post">
   ```

### Node.js Requirements:
- Node.js 14.x or higher
- NPM 6.x or higher

## Option 3: Email Service Integration

For a more reliable solution, consider using a third-party email service:

1. Sign up for a service like FormSpree, Netlify Forms, or EmailJS
2. Follow their integration instructions
3. Update the form action accordingly

## Testing the Form

After setup, test the form by:
1. Filling out all fields with valid information
2. Submitting the form
3. Checking that you receive the email at aryphotography18@gmail.com
4. Verifying that the success message appears on the website

## Troubleshooting

If emails are not being received:
1. Check your spam folder
2. Verify server logs for any errors
3. Ensure your hosting provider allows sending emails
4. Consider using SMTP instead of the PHP mail() function for more reliable delivery