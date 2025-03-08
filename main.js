// Seleccionar elementos del DOM
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Función para alternar el menú
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace (opcional)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});