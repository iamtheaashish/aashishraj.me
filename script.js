// Portfolio Website - Basic Functionality

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    // Add active class to current page nav link
    highlightCurrentPage();

    // Add fade-in animation to content elements
    addFadeInAnimation();
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



// Console easter egg
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my portfolio website!', 'font-size: 14px;');
