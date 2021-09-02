var sectionsElements = document.getElementsByTagName('section');
var sliderElements = document.getElementsByClassName('slider-item');
const menu = document.getElementById('menu');
const menuMobileIcon = document.getElementById('menu-mobile');
var sliderIndex = 0;
var timer = 0;

document.querySelectorAll('.menu li').forEach((item) => {
    item.addEventListener('click', (e) => {
        var actualIndex = getActualIndex();
        var selectedId = e.target.id;

        // toggle visible
        sectionsElements[actualIndex].classList.toggle('visible');
        for(var i = 0; i < sectionsElements.length; i++) {
            if(sectionsElements[i].id === selectedId) {
                sectionsElements[i].classList.toggle('visible');
            }
        }
        
        selectedId = 'proyectos' ? autoSlide() : '';
        
    });
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

function getActualIndex() {
    for(var i = 0; i < sectionsElements.length; i++) {
        if(sectionsElements[i].classList.length > 0) {
            return i;
        }
    }
}

function getSelectedIndex() {}


function autoSlide() {

    clearTimeout(timer);

    sliderIndex > 2 ? sliderIndex = 0 : '';

    for(var i = 0 ; i < sliderElements.length; i++) {
        /* Hide all */
        sliderElements[i].style.display = 'none';
    }

    sliderElements[sliderIndex].style.display = 'block';
    
    sliderIndex++;

    timer = setTimeout(autoSlide, 10000);
}