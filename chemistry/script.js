// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple Form Validation for Contact Form
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    
    if (name && email && message) {
        alert('Message sent successfully!');
        // Form could be cleared here if desired
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
