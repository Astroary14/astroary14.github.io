# Cookie Compliance Guide

This document explains the GDPR-compliant cookie consent implementation for the ARY Photography website.

## Overview

The General Data Protection Regulation (GDPR) requires websites to:

1. Obtain explicit consent before setting non-essential cookies
2. Provide clear information about what cookies are used and why
3. Allow users to accept or decline different types of cookies
4. Make it as easy to withdraw consent as it is to give it
5. Document and store user consent

## Implementation Details

### Cookie Consent Banner

The website now includes a cookie consent banner that:

- Appears at the bottom of the screen on first visit
- Provides clear information about cookie usage
- Offers three options: Accept, Decline, or Cookie Settings
- Links to the Privacy Policy for more information
- Remembers user choices using localStorage

### Cookie Settings Modal

The "Cookie Settings" option opens a modal that:

- Groups cookies into categories (Necessary, Functional, Analytics)
- Explains the purpose of each cookie type
- Allows users to toggle specific cookie categories on/off
- Necessary cookies cannot be disabled (as they're essential)
- Saves user preferences to localStorage

### Privacy Policy

A comprehensive privacy policy has been added that:

- Explains what information is collected
- Details how cookies are used
- Lists the types of cookies with their purposes and durations
- Informs users about their rights under GDPR
- Provides contact information for privacy-related questions

## Technical Implementation

The cookie consent system is implemented in three files:

1. **cookie-consent.js**: Contains the JavaScript code for the banner and settings modal
2. **privacy-policy.html**: Provides detailed information about data collection and usage
3. **index.html**: Includes the cookie consent script

The system uses localStorage to remember user preferences:

- `cookieConsent`: Stores the user's overall consent status (accepted, declined, or customized)
- `cookie_functional`: Stores the user's preference for functional cookies
- `cookie_analytics`: Stores the user's preference for analytics cookies

## How to Use

### For Website Visitors

Visitors will see the cookie banner on their first visit and can:

- Click "Accept" to allow all cookies
- Click "Decline" to reject all non-essential cookies
- Click "Cookie Settings" to customize their preferences

### For Website Administrators

To modify the cookie consent system:

1. Edit `cookie-consent.js` to change the banner appearance or behavior
2. Update `privacy-policy.html` when cookie usage changes
3. Add code to check user preferences before setting cookies:

```javascript
// Example: Check if analytics cookies are allowed
if (localStorage.getItem('cookie_analytics') === 'true') {
    // Initialize analytics
}
```

## Compliance Checklist

- [x] Banner appears before cookies are set
- [x] Clear explanation of cookie usage
- [x] Option to decline non-essential cookies
- [x] Granular control over different cookie types
- [x] Consent is stored and documented
- [x] Privacy policy with detailed cookie information
- [x] Easy access to withdraw or modify consent
- [x] No pre-ticked consent boxes
- [x] No "cookie walls" that block access without consent

## Future Improvements

Consider implementing these enhancements:

1. Server-side consent storage for better tracking
2. Cookie scanner to automatically detect and categorize cookies
3. Periodic consent renewal prompts (e.g., every 12 months)
4. Consent logging for audit purposes
5. Integration with a Consent Management Platform (CMP)