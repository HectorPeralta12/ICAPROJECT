document.addEventListener('DOMContentLoaded', () => {
    const subSection = document.getElementById('subSection1');
    const showBtn = document.getElementById('showSubSection');
    const closeBtn = document.getElementById('closeBtn');
    const namesList = document.querySelectorAll('.names-list li');
    const contentDisplay = document.querySelector('.content-display p');

    // Manejar el clic en el botón para mostrar la sub-sección
    showBtn.addEventListener('click', () => {
        subSection.classList.add('active');
        document.body.style.overflow = 'hidden'; // Desactivar el scroll del body
        showBtn.style.display = 'none'; // Ocultar el botón
    });

    // Manejar el clic en la "X" para cerrar la sub-sección
    closeBtn.addEventListener('click', () => {
        subSection.classList.remove('active');
        document.body.style.overflow = ''; // Reactivar el scroll del body
        showBtn.style.display = 'block'; // Mostrar el botón
    });

    // Cambiar el contenido al hacer clic en los nombres
    namesList.forEach(name => {
        name.addEventListener('click', () => {
            contentDisplay.textContent = name.getAttribute('data-content');
        });
    });

    // Código existente para el menú
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

    // Manejar clics en los botones del slider para prevenir el comportamiento de desplazamiento
    const sliderButtons = document.querySelectorAll('.slider > button');
    const slides = document.querySelectorAll('.slides > div');
    sliderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const slideId = button.getAttribute('data-slide');
            const targetSlide = document.getElementById(slideId);
            targetSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
});



    document.addEventListener('DOMContentLoaded', () => {
        const constellations = [
            { name: 'Tortuga', image: './imagenes/Constelacion1.png' },
            { name: 'Lobo', image: 'path/to/constellation2.jpg' },
            { name: 'Delfín', image: 'path/to/constellation3.jpg' },
            // Añade más constelaciones según sea necesario
        ];

        let currentIndex = 0;

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const constellationName = document.getElementById('constellationName');
        const constellationImage = document.getElementById('constellationImage');

        const updateSlider = () => {
            constellationName.textContent = constellations[currentIndex].name;
            constellationImage.src = constellations[currentIndex].image;
        };

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : constellations.length - 1;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < constellations.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        });

        // Inicializar el slider con la primera constelación
        updateSlider();
    });

    const slider = document.querySelector('#section9 .slider');

function activate(e) {
  const items = document.querySelectorAll('#section9 .item');
  e.target.matches('#section9 .next') && slider.append(items[0])
  e.target.matches('#section9 .prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);









