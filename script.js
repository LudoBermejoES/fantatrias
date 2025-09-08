// Mobile menu toggle
function toggleMenu() {
    var menu = document.getElementById('navMenu');
    menu.classList.toggle('menu-open');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    var menu = document.getElementById('navMenu');
    var menuToggle = document.querySelector('.menu-toggle');
    
    if (menu && menuToggle && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('menu-open');
    }
});

// Close menu when clicking on a link (for same-page navigation)
document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('#navMenu a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var menu = document.getElementById('navMenu');
            if (window.innerWidth <= 768) {
                menu.classList.remove('menu-open');
            }
        });
    });
});