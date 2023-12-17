const menu = document.querySelector('.header__menu');
const menuNav = document.querySelector('.header-nav')
const burgerMenu = document.querySelector('.burger');
const closeMenu = document.querySelector('.header__menu-close');
burgerMenu.addEventListener('click', () => {
    menu.classList.add('header__menu-active');
});
menuNav.addEventListener('click', () => {
    menu.classList.remove('header__menu-active');
});
closeMenu.addEventListener('click', () => {
    menu.classList.remove('header__menu-active');
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});