// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced navbar with scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.7)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Force video width reset when menu closes
    if (!document.body.classList.contains('menu-open')) {
        const video = document.querySelector('#bg-video');
        const heroVideo = document.querySelector('.hero-video');
        if (video) video.style.width = 'auto';
        if (heroVideo) heroVideo.style.width = '100%';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Enhanced portfolio item interactions
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(0) scale(1.05)';
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.zIndex = '1';
    });
});

// Enhanced service card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards with staggered animation
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(card);
});

// Remove contact form handling since form is replaced with info note

// Hero button interactions with enhanced scrolling
document.querySelectorAll('.hero-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.includes('Gallery')) {
            document.querySelector('#portfolio').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (this.textContent.includes('Journey')) {
            document.querySelector('.social-section').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Instagram link tracking
document.querySelector('.instagram-link')?.addEventListener('click', function() {
    console.log('Instagram link clicked');
});

// Email copy fallback
function copyEmail(event) {
    const email = 'aryphotography18@gmail.com';
    
    // Try to copy to clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
            alert('Email copied to clipboard!');
        }).catch(() => {
            alert('Please copy manually: ' + email);
        });
    } else {
        alert('Please copy manually: ' + email);
    }
}

// Remove old loading animation since we have new loading screen

// Enhanced parallax effect for hero section with video
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const video = document.querySelector('#bg-video');
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPercent = scrolled / heroHeight;
        
        // Parallax for hero content
        if (hero && scrolled < heroHeight) {
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Video zoom and fade effect - zooms into center and fades
        if (video && scrolled < heroHeight) {
            const scale = 0.3 + (scrollPercent * 1.2); // Starts at 0.3, zooms to 1.5
            const opacity = Math.max(0, 1 - (scrollPercent * 1.2));
            video.style.transform = `translateX(-50%) translateY(-50%) scale(${scale})`;
            video.style.opacity = opacity;
        }
    }
});

// Dynamic text animation for hero title
function animateText() {
    const title = document.querySelector('.hero-title');
    const text = title.textContent;
    title.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        span.style.animation = 'fadeInChar 0.5s ease forwards';
        title.appendChild(span);
    }
}

// CSS for character animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInChar {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    

    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    /* Video fallback for mobile */
    @media (max-width: 768px) {
        #bg-video {
            display: none;
        }
        .hero-video {
            background: linear-gradient(45deg, #000000, #1a1a1a);
        }
    }
`;
document.head.appendChild(style);

// Portfolio reveal animation on scroll
function revealPortfolioItems() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const windowHeight = window.innerHeight;
    
    portfolioItems.forEach((item, index) => {
        const elementTop = item.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, index * 200);
        }
    });
}

// Set initial state for portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px) scale(0.9)';
    item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
});

// Visit counter
function updateVisitCount() {
    let visits = localStorage.getItem('siteVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('siteVisits', visits);
    document.getElementById('visit-count').textContent = visits;
}

// Loading screen and video handling
document.addEventListener('DOMContentLoaded', function() {
    updateVisitCount();
    const loadingScreen = document.getElementById('loading-screen');
    const mainSite = document.getElementById('main-site');
    const loadingVideo = document.getElementById('loading-video');
    const bgVideo = document.querySelector('#bg-video');
    
    // Show loading screen for 4 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            mainSite.style.display = 'block';
            mainSite.style.opacity = '0';
            mainSite.style.transition = 'opacity 1s ease';
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainSite.style.opacity = '1';
            }, 50);
        }, 1000);
    }, 4000);
    
    // Background video error handling
    if (bgVideo) {
        bgVideo.addEventListener('error', function() {
            console.log('Video failed to load, using fallback background');
            const heroVideo = document.querySelector('.hero-video');
            heroVideo.style.background = 'linear-gradient(45deg, #000000, #1a1a1a)';
        });
    }
    
    // Initialize animations after loading
    setTimeout(() => {
        setTimeout(animateText, 500);
        window.addEventListener('scroll', revealPortfolioItems);
        revealPortfolioItems();
    }, 5000);
});