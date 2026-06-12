document.addEventListener('DOMContentLoaded', function () {

    // Mobile Navigation Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        // Initialize ARIA for accessibility
        menuIcon.setAttribute('aria-expanded', 'false');
        navLinks.setAttribute('aria-hidden', 'true');

        menuIcon.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            menuIcon.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            navLinks.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        });
    }

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        if (questionButton) {
            // Initialize ARIA state
            questionButton.setAttribute('aria-expanded', 'false');

            questionButton.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close all other items for a cleaner accordion experience
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherBtn = otherItem.querySelector('.faq-question');
                        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    }
                });
                // Toggle the clicked item
                if (!isActive) {
                    item.classList.add('active');
                    questionButton.setAttribute('aria-expanded', 'true');
                } else {
                    item.classList.remove('active');
                    questionButton.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });

    // Hero Channels Carousel (Swiper.js)
    if (document.querySelector(".channels-swiper")) {
        var channelsSwiper = new Swiper(".channels-swiper", { 
            slidesPerView: 'auto', 
            spaceBetween: 20,
            loop: true, 
            freeMode: true,
            allowTouchMove: false, // Disables user interaction for a continuous scroll
            autoplay: { 
                delay: 0,
                disableOnInteraction: false,
            }, 
            speed: 7000, // Adjust speed for the marquee effect
        });
    }
});