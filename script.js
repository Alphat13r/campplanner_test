// ============================================
// CampPlanner - JavaScript Interactivity
// ============================================

// Smooth scroll behavior for navigation links
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

// Add animation on scroll for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// Mobile menu toggle (future enhancement)
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Add mobile menu functionality here when needed
        console.log('Mobile menu initialized');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🏕️ CampPlanner loaded successfully!');
    initMobileMenu();
});

// Prevent default link behavior for hash links
document.addEventListener('click', function(event) {
    const link = event.target.closest('a[href^="#"]');
    if (link && link.getAttribute('href') !== '#') {
        event.preventDefault();
    }
});
