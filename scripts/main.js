const TOGGLE_BUTTON = window.document.getElementById('toggle-menu');
const NAV_LINKS = window.document.getElementById('nav-links-container');
const HERO_LOGO = window.document.getElementById('hero-logo');

TOGGLE_BUTTON.addEventListener('click',toggleMenu);

function toggleMenu(){
    
    NAV_LINKS.classList.toggle('hidden');

}