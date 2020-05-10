var proyectos = document.getElementById("proyectos");
var currentPos = 0;

window.onscroll = () => {
    console.clear();
    console.log(proyectos.offsetTop);
    currentPos = window.scrollY;
    console.log(currentPos);

    if(currentPos >= proyectos.offsetTop) {
        proyectos.style.visibility = "visible";
        proyectos.style.animation = "FadeIn 1s 1";
    }
}