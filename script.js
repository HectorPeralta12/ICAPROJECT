document.addEventListener('DOMContentLoaded', () => {
    const subSection = document.getElementById('subSection1');
    const showBtn = document.getElementById('showSubSection');
    const closeBtn = document.getElementById('closeBtn');
    const namesList = document.querySelectorAll('.names-list li');
    const contentDisplay = document.querySelector('.content-display p');

    // manage the click on the show button
    showBtn.addEventListener('click', () => {
        subSection.classList.add('active');
        document.body.style.overflow = 'hidden'; // deactivate the scroll of the body
        showBtn.style.display = 'none'; // hide the button
    });

    // manage the click on the close button
    closeBtn.addEventListener('click', () => {
        subSection.classList.remove('active');
        document.body.style.overflow = ''; // active the scroll of the body
        showBtn.style.display = 'block'; // show the button
    });

    // Cambiar el contenido al hacer clic en los nombres
    
    namesList.forEach(name => {
        name.addEventListener('click', () => {
            contentDisplay.textContent = name.getAttribute('data-content');
            contentDisplay.style.fontSize = '2.1vw';
            if (visualViewport.width < 768) {
                contentDisplay.style.fontSize = '3.2vw';
            }
            
        });
    });

    // Code for the menu
    const menuIcon = document.querySelector('.menu-icon');
    const backgroundImage = document.querySelector('.background-image');
    const topNav = document.querySelector('.top-nav');
    
    menuIcon.addEventListener('click', () => {
        const isActive = topNav.classList.toggle('active');
        backgroundImage.style.transform = isActive ? 'scale(0.95)' : 'scale(1)';
    });
    
    // hide the bar when clicking outside
    document.addEventListener('click', (event) => {
        if (!topNav.contains(event.target) && !menuIcon.contains(event.target)) {
            topNav.classList.remove('active');
            backgroundImage.style.transform = 'scale(1)';
        }
    });
    
    // Manage the clicks on the slider buttons
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

//JS for the Slider of the constellations

document.addEventListener('DOMContentLoaded', () => {
    const section8 = document.getElementById('section8');
    const coverImage = document.getElementById('coverImage');
    const content = document.querySelector('#section8 .content');
    const container = document.querySelector('.slider-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                coverImage.classList.add('fade-out');
             
                
                
                // Use setTimeout to add the hidden class after the animation
                setTimeout(() => {
                    coverImage.classList.add('hidden');
                }, 4000); // 4000ms = 4s
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section8);

    // Code for the slider
    const constellations = [
        { name: 'Tianquiztli', image: './constellations/pleyades.png' },
        { name: 'Citlalicue', image: './constellations/orion.png' },
        { name: 'Mixcoatl', image: './constellations/vialactea.png' },
        { name: 'Tlahuizcal', image: './constellations/venus.png' },
       
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

    // inicialization of the slider
    updateSlider();
});


    //slider of histories

    const slider = document.querySelector('#section7 .slider');

function activate(e) {
  const items = document.querySelectorAll('#section7 .item');
  e.target.matches('#section7 .next') && slider.append(items[0])
  e.target.matches('#section7 .prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);










