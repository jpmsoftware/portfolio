const sections = document.getElementsByTagName('section');
const sliderElements = document.getElementsByClassName('slider-item');
const loadTemplate = document.getElementById('load-template');
const links = document.getElementsByClassName('link');
const menuMobileIcon = document.getElementById('menu-mobile');
const arrowItem = document.getElementById('arrow-right');
var prevSection = 'home';
var sliderIndex = 0;
var timer = 0;

loadTemplate.classList.toggle('hidden');

window.onload = () => {
    loadTemplate.style.animation = 'fade-out .5s 1';
    setTimeout(() => {
        loadTemplate.classList.toggle('hidden');
        showSection('home');
    }, 500);
}

Array.from(links).forEach((link) => {
    link.addEventListener('click', (e) => {
        showSection(e.target.id);
    });
});

function showSection(section) { 

    for(var i = 0; i < sections.length; i++) {
        //Show section
        if(sections[i].id === section) {
            sections[i].style.display = 'block';
            // Update prevSection
            prevSection = section;
            if(section === "proyectos") {
                sliderIndex = 0;
                autoSlide();
            }
        }
        
        // Hide previous section
        else if(sections[i].id === prevSection) {
            sections[i].style.display = 'none';
        } 
        
    }   
}

arrowItem.addEventListener('click', () => {
    sliderIndex+1;
    autoSlide();
});

menuMobileIcon.addEventListener('click', () => {

    if(menu.style.display === 'block') {
        menu.style.display = 'none';
        document.querySelector('header').appendChild(menu);
        
    } else {
        menu.style.display = 'block';
        document.querySelector('body').appendChild(menu);
    }
});

function autoSlide() {

    clearTimeout(timer);

    sliderIndex > 2 ? sliderIndex = 0 : '';

    for(var i = 0 ; i < sliderElements.length; i++) {
        /* Hide all */
        sliderElements[i].style.display = 'none';
    }

    sliderElements[sliderIndex].style.display = 'block';

    timer = setTimeout(autoSlide, 10000);

    sliderIndex++;
}