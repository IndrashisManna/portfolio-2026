// ==========================================
// Portfolio Website - JavaScript Functions
// ==========================================

// Show welcome message on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
});

// Show message when "Say Hi" button is clicked
function showMessage() {
    alert("Thanks for visiting my portfolio! 😊");
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form validation for contact form
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields!');
        return false;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email address!');
        return false;
    }
    
    alert('Thank you for your message! I will get back to you soon.');
    return true;
}

// Add active class to current navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.background = '#3498db';
        }
    });
}

// Call setActiveNavLink when page loads
document.addEventListener('DOMContentLoaded', setActiveNavLink);

