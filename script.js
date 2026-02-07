// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMain = document.querySelector('.nav-main');

    menuToggle.addEventListener('click', function() {
        navMain.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-main a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMain.classList.remove('active');
        });
    });

    // Form submission simulation (for contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent. Gardens will contact you soon.');
            this.reset();
        });
    }

    // Simple testimonial slider (if added later)
    console.log('Gardens website JS loaded successfully.');
});
