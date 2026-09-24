document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sticky Header Effect on Scroll
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Icon change for toggle
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains("active")) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 3. Scroll Animation (Intersection Observer)
    const fadeElements = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

});