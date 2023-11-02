let top_button = document.getElementById("top-button"); // Gets the button
let isMenuOpen = false; // Checks if the collapsible navigator is clicked in mobile view
var navigations = document.querySelector('.navigations'); // Gets navigation elements to later on manipulate its CSS

window.onscroll = function() {scrollFunction()}; // Calling scrollFunction everytime a user scrolls

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top_button.style.display = "block"; // reveals the button if scroll has been detected.
  } else {
    top_button.style.display = "none"; // removes the button if user scrolled to the top.
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; // When button is clicked, this function is called causing a scroll to the top. 
}

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        navigations.style.display = "flex";
    }   
    navigations.style.animation = isMenuOpen ? 'nav-bar-open 0.5s ease' : 'nav-bar-close 0.5s ease'; // Adds animation of close, open of navigation
    let bar_icon = document.getElementById("bar-icon");
    bar_icon.src = isMenuOpen ? 'static/open.svg' : 'static/close.svg'
  }

navigations.addEventListener('animationend', function () {
    if (!isMenuOpen) {
        navigations.style.display = "none";
    }});

document.getElementById('menu-toggle').addEventListener('click', toggleMenu); // Activates a event listener, to wait until the user clicks the navigation bar.