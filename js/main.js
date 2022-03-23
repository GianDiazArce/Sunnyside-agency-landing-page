let navMenu = document.getElementById('menuNav');
let navItems = document.getElementById('navItems');

navMenu.addEventListener('click', () => {
    navItems.classList.toggle('nav__items-active');
})

