document.addEventListener('DOMContentLoaded', function() {

    // --- Appointment Popup ---
    const popup = document.getElementById('appointment-popup');
    const openPopupBtn = document.getElementById('open-popup-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Open the popup
    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    // Close the popup
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the popup if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Handle form submission
    const appointmentForm = document.getElementById('appointment-form');
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your request! We will get back to you shortly.');
        popup.style.display = 'none';
        this.reset();
    });

    // --- Simple Testimonial Slider (can be expanded) ---
    // This is a basic implementation. For more advanced features, consider a library like Swiper.js
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Initially show the first testimonial
    showTestimonial(currentTestimonial);

    // Change testimonial every 5 seconds
    setInterval(nextTestimonial, 5000);

});