//Referenciar elementos
var btnProyectos = document.querySelector('#inicio a');
var linkProyectos = document.querySelector('li:nth-child(1)');
var modalContacto = document.getElementById('contacto');
var proyectos = document.getElementById("proyectos");
var slidersCollection = document.getElementsByClassName('sliders');
var sliderIndex = 0;
var sliderControls = document.querySelectorAll('#controls div');
var currentPos = 0;

//Event Handlers
window.addEventListener('scroll', CheckCurrentYPos, false);
var menu = document.querySelectorAll('ul li');

menu[0].addEventListener('click', () => {
    window.scrollTo(0, 950);
    sliderIndex = 0;
    CheckCurrentYPos();
    document.getElementById('contacto').style.display = 'none';
}, false);

menu[1].addEventListener('click', () => {

}, false);

menu[2].addEventListener('click', () => {
    modalContacto.style.display = 'block';
}, false);

btnProyectos.addEventListener('click', () => {
    window.scrollTo(0, 950);
    sliderIndex = 0;
    CheckCurrentYPos();
}, false);
AutoSlide();

function AutoSlide() {
    if (sliderIndex >= slidersCollection.length) {
        //set index back to 0
        sliderIndex = 0;
    }

    //Hide all sliders
    for (var i = 0; i < slidersCollection.length; i++) {
        slidersCollection[i].style.display = 'none';
    }
    PaintCurrrentIndex();
    slidersCollection[sliderIndex].style.display = 'flex';
    sliderIndex++;
    setTimeout(AutoSlide, 5000);
}

function PaintCurrrentIndex() {
    for(var i = 0; i < sliderControls.length; i++) {
        sliderControls[i].style.background = 'none';
    }
    sliderControls[sliderIndex].style.background = '#fff';
}

function CheckCurrentYPos() {
    currentPos = window.scrollY;
    if (currentPos >= proyectos.offsetTop) {
        proyectos.style.visibility = 'visible';
        proyectos.style.animation = 'FadeIn 1s 1';
    }
}

window.onclick = function(event) {
    console.log(event.target);
    // if(event.target != modalContacto) {
    //     modalContacto.style.display = 'none';
    // }
}


