document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.style.top = '-100px'; // Ajuste a altura conforme necessário
        } else {
            // Scroll up
            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});