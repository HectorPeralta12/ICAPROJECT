

const menuIcon = document.querySelector('.menu-icon');
const backgroundImage = document.querySelector('.background-image');
const topNav = document.querySelector('.top-nav');

menuIcon.addEventListener('mouseenter', () => {
    backgroundImage.style.transform = 'scale(0.95)';
    topNav.style.opacity = '1'; // Hacemos visible la barra de navegación
});

backgroundImage.addEventListener('mouseleave', () => {
    if (!topNav.matches(':hover')) { // Solo reescala si el mouse no está sobre la barra de navegación
        backgroundImage.style.transform = 'scale(1)';
        topNav.style.opacity = '0';
    }
});

topNav.addEventListener('mouseleave', () => {
    backgroundImage.style.transform = 'scale(1)';
    topNav.style.opacity = '0';
});


const carouselTrack = document.querySelector('.carousel-track');

function handleCarouselScroll(event) {
    event.preventDefault(); // Prevenir el scroll de la página solo para el carrusel
    let transformAmount = parseInt(window.getComputedStyle(carouselTrack).getPropertyValue('transform').split(',')[4] || 0);
    const delta = Math.sign(event.deltaY) * 200; // Aumenta el incremento para un desplazamiento más rápido
    const gap = 20; // Asumiendo un gap de 20px
    const visibleWidth = window.innerWidth - gap; // Ancho visible ajustado por el gap
    const trackWidth = carouselTrack.scrollWidth;
    const maxTransform = -(trackWidth - window.innerWidth + gap); // Ajuste para dejar 20px al final

    if ((delta > 0 && transformAmount > maxTransform) || (delta < 0 && transformAmount < 0)) {
        transformAmount -= delta;
        transformAmount = Math.min(0, Math.max(transformAmount, maxTransform)); // Limita el rango de transformación
        carouselTrack.style.transform = `translateX(${transformAmount}px)`;
    }
}

// Añadir eventos para manejar cuando el cursor entra y sale del carousel-track
carouselTrack.addEventListener('mouseenter', () => {
    document.addEventListener('wheel', handleCarouselScroll, { passive: false });
});

carouselTrack.addEventListener('mouseleave', () => {
    document.removeEventListener('wheel', handleCarouselScroll);
});



