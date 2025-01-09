// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Reveal sections on scroll
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('main section').forEach(section => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition', 'duration-1000');
    observer.observe(section);
});

// Highlight navigation links dynamically
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - document.querySelector('nav').offsetHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-indigo-400');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('text-indigo-400');
        }
    });
});
