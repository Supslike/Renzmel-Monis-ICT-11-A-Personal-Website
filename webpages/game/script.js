let isMenuOpen = false;
var navigations = document.querySelector('.navigations');

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        navigations.style.display = "flex";
    }   
    navigations.style.animation = isMenuOpen ? 'nav-bar-open 0.5s ease' : 'nav-bar-close 0.5s ease';
    let bar_icon = document.getElementById("bar-icon");
    bar_icon.src = isMenuOpen ? '/static/open.svg' : '/static/close.svg'
  }

navigations.addEventListener('animationend', function () {
    if (!isMenuOpen) {
        navigations.style.display = "none";
    }});

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);