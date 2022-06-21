document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.noticias-cafes', {delay: 500});
ScrollReveal().reveal('.cafe-banner-one', {delay: 500});
ScrollReveal().reveal('.cafe-banner-two', {delay: 500});
