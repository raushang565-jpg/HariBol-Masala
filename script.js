// Language toggle
const langToggle = document.getElementById('lang-toggle');
let isNepali = false;

langToggle.addEventListener('click', () => {
    isNepali = !isNepali;
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        el.textContent = isNepali ? el.getAttribute('data-np') : el.getAttribute('data-en');
    });
    langToggle.textContent = isNepali ? 'Switch to English' : 'Switch to Nepali';
});

// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}