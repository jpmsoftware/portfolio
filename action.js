var proyectos = document.getElementById("proyectos");
var currentPos = 0;

window.onscroll = () => {
    currentPos = window.scrollY;
    
    if(currentPos >= proyectos.offsetTop) {
        proyectos.style.visibility = "visible";
        proyectos.style.animation = "FadeIn 1s 1";
    }
}

function Sliders() {

}