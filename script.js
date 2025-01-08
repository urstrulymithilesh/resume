// Smooth scrolling for navigation links
document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.nav-bar').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight the "Contact" button in the nav bar dynamically
const navLinks = document.querySelectorAll('.nav-bar a');
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - document.querySelector('.nav-bar').offsetHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
