var typed = new Typed(".iam-text", {
    strings: [
        "Développeur Front-end", 
        "Développeur Backend", 
        "Fullstack JavaScript", 
        "UI/UX Designer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1200,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});

const animatedElements = document.querySelectorAll('.service-card, .about-content, .hero-content, .contact-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

setTimeout(() => {
    document.querySelectorAll('.hero-content, .avatar-frame').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
}, 100);
