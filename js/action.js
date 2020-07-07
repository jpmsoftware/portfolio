/*===============================================================================================*/
/*======================================= GET DOM ELEMENTS ======================================*/
/*===============================================================================================*/
var menuOptionProyectos = document.querySelectorAll('#menu li a')[0];
var menuOptionAcerca = document.querySelectorAll('#menu li a')[1];
var menuOptionContacto = document.querySelectorAll('#menu li a')[2];
var buttonProyectos = document.getElementById('btnVerProyectos');
var sectionProyectos = document.getElementById('proyectos');
var sliderControls = document.querySelectorAll('#controls div');
var sliderCollection = document.getElementsByClassName('sliders-group');
var modal_acerca = document.getElementById('acerca');
var modal_contacto = document.getElementById('modal-contacto');
var update;
var sliderIndex = 0;

/*===============================================================================================*/
/*========================================== EVENTS =============================================*/
/*===============================================================================================*/
menuOptionProyectos.addEventListener('click', () => {
    window.scrollTo(0, 950);
    if (sectionProyectos.style.visibility != 'visible') {
        sectionProyectos.style.visibility = 'visible';
        sectionProyectos.style.animation = 'FadeIn 1s 1';
        autoSlide();
    }
}, false);

menuOptionAcerca.addEventListener('click', showAcerca, false);

menuOptionContacto.addEventListener('click', showContacto, false);

buttonProyectos.addEventListener('click', () => {
    window.scrollTo(0, 950);
    if (sectionProyectos.style.visibility != 'visible') {
        sectionProyectos.style.visibility = 'visible';
        sectionProyectos.style.animation = 'FadeIn 1s 1';
        autoSlide();
    }
}, false);

for (var i = 0; i < sliderControls.length; i++) {
    sliderControls[i].addEventListener('click', changeIndex, false);
}

modal_acerca.onclick = (event) => {
    if(event.target.id == 'icon-close') {
        modal_acerca.style.display = 'none';
    }
}

modal_contacto.onclick = (event) => {
    if(event.target.id == 'icon-close') {
        modal_contacto.style.display = 'none';
    }
}

/*===============================================================================================*/
/*========================================== FUNCTIONS ==========================================*/
/*===============================================================================================*/
function autoSlide() {
    clearTimeout(update);
    if (sliderIndex > sliderCollection.length - 1) {
        sliderIndex = 0;
    }
    for (var i = 0; i < sliderCollection.length; i++) {
        sliderCollection[i].style.display = 'none';
    }
    sliderCollection[sliderIndex].style.display = 'flex';
    paintIndex();
    sliderIndex++;
    
    update = window.setTimeout(autoSlide, 6000);
}

function showAcerca() {
    modal_acerca.style.display = 'flex';
}

function showContacto() {
    modal_contacto.style.display = 'block';
    // modal_contacto.style.animation = 'MoveUp 4s 1';
}

function paintIndex() {
    for (var i = 0; i < sliderControls.length; i++) {
        sliderControls[i].style.backgroundColor = 'transparent';
    }
    sliderControls[sliderIndex].style.backgroundColor = '#fff';
}

function changeIndex(event) {
    //Get index of the item that calls the event
    for (var i = 0; i < sliderControls.length; i++) {
        if (sliderControls[i] === event.target) {
            sliderIndex = i;
        }
    }
    paintIndex();
    autoSlide();
}

window.onscroll = () => {
    if (window.scrollY >= 500) {
        if (sectionProyectos.style.visibility != 'visible') {
            sectionProyectos.style.visibility = 'visible';
            sectionProyectos.style.animation = 'FadeIn 1s 1';
            autoSlide();
        }
    }
}
