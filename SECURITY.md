# Security Enhancements

This document explains the security improvements made to the ARY Photography website.

## Content Security Policy (CSP)

The Content Security Policy has been refined to provide better protection:

```
default-src 'none';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: https://formsubmit.co;
media-src 'self' blob:;
font-src 'self';
connect-src 'self' https://formsubmit.co;
frame-ancestors 'none';
form-action 'self' https://formsubmit.co;
base-uri 'self';
object-src 'none';
manifest-src 'self';
worker-src 'self';
child-src 'none';
upgrade-insecure-requests;
block-all-mixed-content
```

### Key Improvements:

1. **Default Deny**: Changed `default-src` from `'self'` to `'none'` to apply a strict default-deny policy
2. **FormSubmit Integration**: Added explicit permissions for FormSubmit.co to ensure the contact form works
3. **Mixed Content Blocking**: Added `block-all-mixed-content` directive to prevent HTTP content on HTTPS site
4. **HTTPS Enforcement**: Added `upgrade-insecure-requests` to upgrade HTTP requests to HTTPS
5. **Additional Restrictions**: Added `manifest-src`, `worker-src`, and `child-src` directives
6. **Granular Control**: More specific permissions for each content type

## Security Headers

The site already includes these important security headers:

- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-XSS-Protection**: Provides XSS protection for older browsers
- **Referrer-Policy**: Controls information in HTTP headers
- **Permissions-Policy**: Restricts access to browser features
- **Strict-Transport-Security**: Enforces HTTPS connections
- **Cross-Origin Policies**: Protects against various cross-origin attacks

## Security.txt

Added a `security.txt` file in the `.well-known` directory to facilitate responsible vulnerability disclosure. This follows the standard defined at [securitytxt.org](https://securitytxt.org/).

## Security Policy

Added a `security-policy.html` page that outlines:

- How to report security vulnerabilities
- Response timeline for security reports
- Disclosure policy
- Security measures implemented on the site

## Feature Policy

Added a detailed feature policy that restricts access to sensitive browser features like:

- Camera and microphone access
- Geolocation
- Payment API
- Fullscreen mode
- Autoplay
- And many others

## Benefits

These security enhancements provide:

1. **Better XSS Protection**: Stricter CSP reduces the risk of cross-site scripting attacks
2. **Improved Data Protection**: Prevents unauthorized data access and exfiltration
3. **Enhanced Privacy**: Restricts access to sensitive browser features
4. **Responsible Disclosure**: Clear process for reporting security issues
5. **HTTPS Enforcement**: Ensures all connections are encrypted

These changes are implemented without affecting the site's appearance or functionality.