const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');
// const phoneOneMenu = document.getElementById('phoneOneMenu');
// const phoneTwoMenu = document.getElementById('phoneTwoMenu');
// const headerMenu = document.getElementById('headerMenu');
const body = document.body;

burgerMenu.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        burgerMenu.classList.toggle('burger-menu--active');
        navMenu.classList.toggle('header-navigation--active');
        // phoneOneMenu.classList.toggle('header__phone-link--active');
        // phoneTwoMenu.classList.toggle('header__phone-link--active');
        // headerMenu.classList.toggle('header__container--active');
        body.classList.toggle('no-scroll');
    }
});

const navLinks = navMenu.querySelectorAll('a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            burgerMenu.classList.remove('burger-menu--active');
            navMenu.classList.remove('header-navigation--active');
            // phoneOneMenu.classList.remove('header__phone-link--active');
            // phoneTwoMenu.classList.remove('header__phone-link--active');
            // headerMenu.classList.remove('header__container--active');
            body.classList.remove('no-scroll');
        }
    });
});
