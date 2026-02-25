// Portfolio Website - Basic Functionality

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    // Add active class to current page nav link
    highlightCurrentPage();

    // Add fade-in animation to content elements
    addFadeInAnimation();

    // Add keyboard navigation
    addKeyboardNavigation();
});

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Add fade-in animation to elements on page load
function addFadeInAnimation() {
    const elements = document.querySelectorAll('.link-card, .project-item, .experience-item, .blog-post, .reading-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Keyboard navigation shortcuts
function addKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Alt + H = Home
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            window.location.href = 'index.html';
        }
        
        // Alt + P = Projects
        if (e.altKey && e.key === 'p') {
            e.preventDefault();
            window.location.href = 'projects.html';
        }
        
        // Alt + E = Experience
        if (e.altKey && e.key === 'e') {
            e.preventDefault();
            window.location.href = 'experience.html';
        }
        
        // Alt + R = Reading
        if (e.altKey && e.key === 'r') {
            e.preventDefault();
            window.location.href = 'reading.html';
        }
        
        // Alt + B = Blog
        if (e.altKey && e.key === 'b') {
            e.preventDefault();
            window.location.href = 'blog.html';
        }
    });
}

// Add visual feedback for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.altKey) {
        document.body.style.outline = '2px solid #000';
    }
});

document.addEventListener('keyup', (e) => {
    if (!e.altKey) {
        document.body.style.outline = 'none';
    }
});

// Console easter egg
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my portfolio website!', 'font-size: 14px;');
console.log('%cKeyboard shortcuts:', 'font-size: 12px; font-weight: bold; margin-top: 10px;');
console.log('%cAlt + H → Home', 'font-size: 12px;');
console.log('%cAlt + P → Projects', 'font-size: 12px;');
console.log('%cAlt + E → Experience', 'font-size: 12px;');
console.log('%cAlt + R → Reading', 'font-size: 12px;');
console.log('%cAlt + B → Blog', 'font-size: 12px;');
