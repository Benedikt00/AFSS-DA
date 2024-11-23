let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling Down - Hide Navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling Up - Show Navbar
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
});
