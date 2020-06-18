//Referenciar elementos
var proyectos = document.getElementById("proyectos");
var slidersCollection = document.getElementsByClassName('sliders');
var slideIndex = 0;
var sliderControls = document.querySelectorAll('#controls div');
var currentPos = 0;

//Event Handlers
for (var i = 0; i < sliderControls.length; i++) {
    sliderControls[i].addEventListener('click', null, false);
}

AutoSlide();

function AutoSlide() {
    if (slideIndex >= slidersCollection.length) {
        //set index back to 0
        slideIndex = 0;
    }

    //Hide all sliders
    for (var i = 0; i < slidersCollection.length; i++) {
        slidersCollection[i].style.display = 'none';
    }
    console.log(slideIndex);
    slidersCollection[slideIndex].style.display = 'flex';
    slideIndex++;
    setTimeout(AutoSlide, 4000);    
}

window.onscroll = () => {
    currentPos = window.scrollY;
    if (currentPos >= proyectos.offsetTop) {
        proyectos.style.visibility = 'visible';
        proyectos.style.animation = 'FadeIn 1s 1';
    }
}