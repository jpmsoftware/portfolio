var loadTemplate = document.getElementById('load-template');
var sections = document.getElementsByTagName('section');
var links = document.getElementsByClassName('link');
var prevSection = 'home';
var sliderElements = document.getElementsByClassName('slider-item');
var menuIcon = document.getElementById('menu-mobile');
var sliderIndex = 0;
var timer = 0;

loadTemplate.classList.toggle('hidden');

Array.from(links).forEach((link) => {
    link.addEventListener('click', (e) => {
        showSection(e.target.id);
    });
});

document.getElementById('arrow').addEventListener('click', () => {
    sliderIndex + 1;
    autoSlide();
});

menuIcon.addEventListener('click', () => {
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
        document.querySelector('header').appendChild(menu);
        
    } else {
        menu.style.display = 'block';
        document.querySelector('body').appendChild(menu);
    }
});

window.onload = () => {
    loadTemplate.style.animation = 'fade-out .3s 1';
    setTimeout(() => {
        loadTemplate.classList.toggle('hidden');
        showSection('home');
    }, 300);
}

function showSection(selSection) { 

    for(var i = 0; i < sections.length; i++) {
        // Show section
        if(sections[i].id === selSection) {
            sections[i].style.display = 'block';
            
            if(selSection === "proyectos") {
                sliderIndex = 0;
                autoSlide();
            }
        }
        
        // Hide previous section
        else if(sections[i].id === prevSection) {
            sections[i].style.display = 'none';
        } 
    }

    if(menu.style.display === 'block') {
        menu.style.display = 'none'
    }

    // Update prevSection
    prevSection = selSection;
}

function autoSlide() {

    clearTimeout(timer);

    sliderIndex > 2 ? sliderIndex = 0 : '';

    for(var i = 0 ; i < sliderElements.length; i++) {
        sliderElements[i].style.display = 'none';
    }

    sliderElements[sliderIndex].style.display = 'block';

    timer = setTimeout(autoSlide, 10000);

    sliderIndex++;
}