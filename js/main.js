// select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn
            .classList
            .add('close');
        menu
            .classList
            .add('show');
        menuNav
            .classList
            .add('show');
        menuBranding
            .classList
            .add('show');
        navItems.forEach(item => item.classList.add('show'));

        // set menu state
        showMenu = true;
    } else {
        menuBtn
            .classList
            .remove('close');
        menu
            .classList
            .remove('show');
        menuNav
            .classList
            .remove('show');
        menuBranding
            .classList
            .remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // set menu state
        showMenu = false;
    }
}

// typed js setting

const typed = new Typed("#myName", {
    strings: [
        "Hello World", "My Name Samuel Pasaribu", "I'm Web Developer", "Focus On Back-End", "Let's See My <i class='fa fa-heart' style='color:red'></i> Portfolio"
    ],
    showCursor: true,
    typeSpeed: 120,
    backSpeed: 100,
    showCursor: true,
    // loop: true,
    smartBackspace: true // Default value
})

// particle js setting
particlesJS.load('particles-js', 'js/particle.json', function () {
    console.log('particle is loaded');
});
