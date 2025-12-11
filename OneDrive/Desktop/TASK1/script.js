// ==========================================
// SMOOTH SCROLLING & NAVIGATION
// ==========================================

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================
// FORM VALIDATION & SUBMISSION
// ==========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Validate message length
    if (message.trim().length < 10) {
        showNotification('Message must be at least 10 characters long', 'error');
        return;
    }

    // Success message
    showNotification('Thank you! Your message has been sent successfully.', 'success');

    // Reset form
    contactForm.reset();

    // Log form data (in production, send to backend)
    console.log({
        name,
        email,
        message,
        timestamp: new Date().toISOString()
    });
});

// ==========================================
// NOTIFICATION SYSTEM
// ==========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles dynamically
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards and sections
document.querySelectorAll('.feature-card, .stat-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ==========================================
// SMOOTH SCROLL BEHAVIOR ENHANCEMENT
// ==========================================

// Enhance CTA button click
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#features').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// ==========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ==========================================

window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active state styling in CSS
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ==========================================
// PERFORMANCE: Debounce Scroll Events
// ==========================================

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ==========================================
// ACCESSIBILITY: Keyboard Navigation
// ==========================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // Skip to main content on Alt+1
    if (e.altKey && e.key === '1') {
        document.querySelector('#home').focus();
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    }
});

// ==========================================
// PAGE LOAD ANALYTICS (Optional)
// ==========================================

window.addEventListener('load', () => {
    console.log('Page loaded at:', new Date().toISOString());
    console.log('Performance metrics available via window.performance');
});

// ==========================================
// DARK MODE TOGGLE (Optional Enhancement)
// ==========================================

function initDarkModeToggle() {
    const darkModeButton = document.createElement('button');
    darkModeButton.innerHTML = '🌙';
    darkModeButton.className = 'dark-mode-toggle';
    darkModeButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;

    darkModeButton.addEventListener('mouseenter', () => {
        darkModeButton.style.transform = 'scale(1.1)';
    });

    darkModeButton.addEventListener('mouseleave', () => {
        darkModeButton.style.transform = 'scale(1)';
    });

    darkModeButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === 'rgb(26, 26, 46)' ? '#f8f9fa' : '#1a1a2e';
        darkModeButton.innerHTML = 
            document.body.style.backgroundColor === '#f8f9fa' ? '🌙' : '☀️';
    });

    // document.body.appendChild(darkModeButton); // Uncomment to enable
}

// Call dark mode initialization (optional)
// initDarkModeToggle();

// ==========================================
// CONSOLE WELCOME MESSAGE
// ==========================================

console.log('%cWelcome to Readzy! 📚', 'color: #00bcd4; font-size: 20px; font-weight: bold;');
console.log('%cFully responsive landing page built with HTML, CSS, and JavaScript', 'color: #76ff03; font-size: 14px;');

// ==========================================
// HERO CAROUSEL (small, accessible)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const prevBtn = carousel.querySelector('.carousel-control.prev');
    const nextBtn = carousel.querySelector('.carousel-control.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');

    let current = 0;
    const total = items.length;

    function createDots() {
        for (let i = 0; i < total; i++) {
            const btn = document.createElement('button');
            btn.setAttribute('aria-label', `Show slide ${i + 1}`);
            btn.addEventListener('click', () => {
                goTo(i);
                resetAutoplay();
            });
            dotsContainer.appendChild(btn);
        }
    }

    function update() {
        track.style.transform = `translateX(-${current * 100}%)`;
        Array.from(dotsContainer.children).forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function goTo(index) {
        current = (index + total) % total;
        update();
    }

    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });
    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });

    createDots();
    update();

    // Autoplay with pause on hover
    let autoplayId = setInterval(() => goTo(current + 1), 3500);
    function resetAutoplay() { clearInterval(autoplayId); autoplayId = setInterval(() => goTo(current + 1), 3500); }

    carousel.addEventListener('mouseenter', () => clearInterval(autoplayId));
    carousel.addEventListener('mouseleave', () => resetAutoplay());

    // Keyboard controls
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { goTo(current - 1); resetAutoplay(); }
        if (e.key === 'ArrowRight') { goTo(current + 1); resetAutoplay(); }
    });
    // Make carousel focusable for keyboard
    carousel.setAttribute('tabindex', '0');
});
