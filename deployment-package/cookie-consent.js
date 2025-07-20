// GDPR Cookie Consent Banner
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already consented
    if (!localStorage.getItem('cookieConsent')) {
        // Create cookie consent banner
        const banner = document.createElement('div');
        banner.id = 'cookie-consent';
        banner.style.position = 'fixed';
        banner.style.bottom = '0';
        banner.style.left = '0';
        banner.style.right = '0';
        banner.style.padding = '15px 20px';
        banner.style.background = 'rgba(0, 0, 0, 0.85)';
        banner.style.color = '#ffffff';
        banner.style.zIndex = '10000';
        banner.style.display = 'flex';
        banner.style.justifyContent = 'space-between';
        banner.style.alignItems = 'center';
        banner.style.flexWrap = 'wrap';
        banner.style.backdropFilter = 'blur(10px)';
        banner.style.boxShadow = '0 -5px 20px rgba(0, 0, 0, 0.3)';
        banner.style.transform = 'translateY(100%)';
        banner.style.transition = 'transform 0.5s ease-in-out';
        
        // Banner content
        const content = document.createElement('div');
        content.style.flex = '1';
        content.style.marginRight = '20px';
        content.style.minWidth = '200px';
        
        const title = document.createElement('h3');
        title.textContent = 'Cookie Notice';
        title.style.margin = '0 0 8px 0';
        title.style.fontSize = '18px';
        title.style.fontWeight = '600';
        
        const text = document.createElement('p');
        text.innerHTML = 'This website uses cookies to ensure you get the best experience. By continuing to use this site, you consent to our <a href="/privacy-policy.html" style="color: #00BFFF; text-decoration: underline;">privacy policy</a>.';
        text.style.margin = '0';
        text.style.fontSize = '14px';
        text.style.lineHeight = '1.5';
        
        content.appendChild(title);
        content.appendChild(text);
        
        // Buttons container
        const buttons = document.createElement('div');
        buttons.style.display = 'flex';
        buttons.style.gap = '10px';
        buttons.style.marginTop = '10px';
        
        // Accept button
        const acceptBtn = document.createElement('button');
        acceptBtn.textContent = 'Accept';
        acceptBtn.style.padding = '8px 20px';
        acceptBtn.style.background = 'linear-gradient(45deg, #C2185B, #8B2F8B)';
        acceptBtn.style.color = '#ffffff';
        acceptBtn.style.border = 'none';
        acceptBtn.style.borderRadius = '25px';
        acceptBtn.style.cursor = 'pointer';
        acceptBtn.style.fontWeight = '600';
        acceptBtn.style.fontSize = '14px';
        acceptBtn.style.transition = 'all 0.3s ease';
        
        // Decline button
        const declineBtn = document.createElement('button');
        declineBtn.textContent = 'Decline';
        declineBtn.style.padding = '8px 20px';
        declineBtn.style.background = 'transparent';
        declineBtn.style.color = '#ffffff';
        declineBtn.style.border = '1px solid #ffffff';
        declineBtn.style.borderRadius = '25px';
        declineBtn.style.cursor = 'pointer';
        declineBtn.style.fontWeight = '600';
        declineBtn.style.fontSize = '14px';
        declineBtn.style.transition = 'all 0.3s ease';
        
        // Settings button
        const settingsBtn = document.createElement('button');
        settingsBtn.textContent = 'Cookie Settings';
        settingsBtn.style.padding = '8px 20px';
        settingsBtn.style.background = 'transparent';
        settingsBtn.style.color = '#00BFFF';
        settingsBtn.style.border = 'none';
        settingsBtn.style.borderRadius = '25px';
        settingsBtn.style.cursor = 'pointer';
        settingsBtn.style.fontWeight = '600';
        settingsBtn.style.fontSize = '14px';
        settingsBtn.style.transition = 'all 0.3s ease';
        
        // Add hover effects
        acceptBtn.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 5px 15px rgba(194, 24, 91, 0.5)';
        });
        
        acceptBtn.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        declineBtn.addEventListener('mouseover', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        declineBtn.addEventListener('mouseout', function() {
            this.style.background = 'transparent';
        });
        
        settingsBtn.addEventListener('mouseover', function() {
            this.style.textDecoration = 'underline';
        });
        
        settingsBtn.addEventListener('mouseout', function() {
            this.style.textDecoration = 'none';
        });
        
        // Add event listeners
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            hideBanner();
        });
        
        declineBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            hideBanner();
        });
        
        settingsBtn.addEventListener('click', function() {
            showCookieSettings();
        });
        
        buttons.appendChild(acceptBtn);
        buttons.appendChild(declineBtn);
        buttons.appendChild(settingsBtn);
        
        // Assemble banner
        banner.appendChild(content);
        banner.appendChild(buttons);
        
        // Add banner to page
        document.body.appendChild(banner);
        
        // Show banner after a short delay
        setTimeout(function() {
            banner.style.transform = 'translateY(0)';
        }, 1000);
        
        // Function to hide banner
        function hideBanner() {
            banner.style.transform = 'translateY(100%)';
            setTimeout(function() {
                banner.remove();
            }, 500);
        }
        
        // Function to show cookie settings
        function showCookieSettings() {
            // Create modal
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.background = 'rgba(0, 0, 0, 0.8)';
            modal.style.zIndex = '10001';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.3s ease';
            
            // Modal content
            const modalContent = document.createElement('div');
            modalContent.style.background = 'linear-gradient(135deg, #2D1B69 0%, #1A0B3D 100%)';
            modalContent.style.borderRadius = '15px';
            modalContent.style.padding = '30px';
            modalContent.style.maxWidth = '500px';
            modalContent.style.width = '90%';
            modalContent.style.maxHeight = '80vh';
            modalContent.style.overflowY = 'auto';
            modalContent.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.5)';
            modalContent.style.transform = 'scale(0.9)';
            modalContent.style.transition = 'transform 0.3s ease';
            
            // Modal header
            const modalHeader = document.createElement('div');
            modalHeader.style.display = 'flex';
            modalHeader.style.justifyContent = 'space-between';
            modalHeader.style.alignItems = 'center';
            modalHeader.style.marginBottom = '20px';
            
            const modalTitle = document.createElement('h3');
            modalTitle.textContent = 'Cookie Settings';
            modalTitle.style.margin = '0';
            modalTitle.style.fontSize = '22px';
            modalTitle.style.color = '#ffffff';
            
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.background = 'transparent';
            closeBtn.style.border = 'none';
            closeBtn.style.color = '#ffffff';
            closeBtn.style.fontSize = '24px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.padding = '0';
            closeBtn.style.width = '30px';
            closeBtn.style.height = '30px';
            closeBtn.style.display = 'flex';
            closeBtn.style.justifyContent = 'center';
            closeBtn.style.alignItems = 'center';
            closeBtn.style.borderRadius = '50%';
            closeBtn.style.transition = 'background 0.3s ease';
            
            closeBtn.addEventListener('mouseover', function() {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            });
            
            closeBtn.addEventListener('mouseout', function() {
                this.style.background = 'transparent';
            });
            
            closeBtn.addEventListener('click', function() {
                closeModal();
            });
            
            modalHeader.appendChild(modalTitle);
            modalHeader.appendChild(closeBtn);
            
            // Cookie types
            const cookieTypes = [
                {
                    id: 'necessary',
                    name: 'Necessary',
                    description: 'These cookies are essential for the website to function properly.',
                    required: true
                },
                {
                    id: 'functional',
                    name: 'Functional',
                    description: 'These cookies enable personalized features and functionality.',
                    required: false
                },
                {
                    id: 'analytics',
                    name: 'Analytics',
                    description: 'These cookies help us understand how visitors interact with the website.',
                    required: false
                }
            ];
            
            // Create cookie options
            const cookieOptions = document.createElement('div');
            
            cookieTypes.forEach(function(cookie) {
                const option = document.createElement('div');
                option.style.marginBottom = '20px';
                option.style.padding = '15px';
                option.style.background = 'rgba(0, 0, 0, 0.2)';
                option.style.borderRadius = '10px';
                
                const header = document.createElement('div');
                header.style.display = 'flex';
                header.style.justifyContent = 'space-between';
                header.style.alignItems = 'center';
                header.style.marginBottom = '10px';
                
                const name = document.createElement('h4');
                name.textContent = cookie.name;
                name.style.margin = '0';
                name.style.color = '#ffffff';
                
                const toggle = document.createElement('div');
                toggle.style.position = 'relative';
                toggle.style.width = '50px';
                toggle.style.height = '24px';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = cookie.id;
                checkbox.checked = cookie.required || localStorage.getItem(`cookie_${cookie.id}`) === 'true';
                checkbox.disabled = cookie.required;
                checkbox.style.opacity = '0';
                checkbox.style.width = '0';
                checkbox.style.height = '0';
                
                const slider = document.createElement('span');
                slider.style.position = 'absolute';
                slider.style.cursor = cookie.required ? 'default' : 'pointer';
                slider.style.top = '0';
                slider.style.left = '0';
                slider.style.right = '0';
                slider.style.bottom = '0';
                slider.style.backgroundColor = cookie.required ? '#C2185B' : '#ccc';
                slider.style.borderRadius = '34px';
                slider.style.transition = '.4s';
                
                const sliderButton = document.createElement('span');
                sliderButton.style.position = 'absolute';
                sliderButton.style.content = '""';
                sliderButton.style.height = '16px';
                sliderButton.style.width = '16px';
                sliderButton.style.left = '4px';
                sliderButton.style.bottom = '4px';
                sliderButton.style.backgroundColor = 'white';
                sliderButton.style.borderRadius = '50%';
                sliderButton.style.transition = '.4s';
                sliderButton.style.transform = checkbox.checked ? 'translateX(26px)' : 'translateX(0)';
                
                checkbox.addEventListener('change', function() {
                    sliderButton.style.transform = this.checked ? 'translateX(26px)' : 'translateX(0)';
                    slider.style.backgroundColor = this.checked ? '#C2185B' : '#ccc';
                });
                
                toggle.appendChild(checkbox);
                toggle.appendChild(slider);
                slider.appendChild(sliderButton);
                
                header.appendChild(name);
                header.appendChild(toggle);
                
                const description = document.createElement('p');
                description.textContent = cookie.description;
                description.style.margin = '0';
                description.style.fontSize = '14px';
                description.style.color = '#cccccc';
                
                option.appendChild(header);
                option.appendChild(description);
                
                cookieOptions.appendChild(option);
            });
            
            // Save button
            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save Preferences';
            saveBtn.style.padding = '10px 25px';
            saveBtn.style.background = 'linear-gradient(45deg, #C2185B, #8B2F8B)';
            saveBtn.style.color = '#ffffff';
            saveBtn.style.border = 'none';
            saveBtn.style.borderRadius = '25px';
            saveBtn.style.cursor = 'pointer';
            saveBtn.style.fontWeight = '600';
            saveBtn.style.fontSize = '14px';
            saveBtn.style.transition = 'all 0.3s ease';
            saveBtn.style.display = 'block';
            saveBtn.style.margin = '20px auto 0';
            
            saveBtn.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 15px rgba(194, 24, 91, 0.5)';
            });
            
            saveBtn.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
            
            saveBtn.addEventListener('click', function() {
                // Save preferences
                cookieTypes.forEach(function(cookie) {
                    if (!cookie.required) {
                        localStorage.setItem(`cookie_${cookie.id}`, document.getElementById(cookie.id).checked);
                    }
                });
                
                localStorage.setItem('cookieConsent', 'customized');
                closeModal();
                hideBanner();
            });
            
            // Assemble modal
            modalContent.appendChild(modalHeader);
            modalContent.appendChild(cookieOptions);
            modalContent.appendChild(saveBtn);
            
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // Show modal
            setTimeout(function() {
                modal.style.opacity = '1';
                modalContent.style.transform = 'scale(1)';
            }, 10);
            
            // Function to close modal
            function closeModal() {
                modal.style.opacity = '0';
                modalContent.style.transform = 'scale(0.9)';
                setTimeout(function() {
                    modal.remove();
                }, 300);
            }
        }
    }
});