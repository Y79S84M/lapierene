const TOGGLE_BUTTON = window.document.getElementById('toggle-menu');
const NAV_LINKS = window.document.getElementById('nav-links');

TOGGLE_BUTTON.addEventListener('click',toggleMenu);

function toggleMenu(){
    NAV_LINKS.classList.toggle('hidden');
}