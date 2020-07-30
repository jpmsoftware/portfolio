const menu = document.getElementsByClassName('menu-item');
const btnProyectos = document.getElementById('button-proyectos');
const btnEnviar = document.getElementById('enviar');
var lastScroll = 0;

menu[0].addEventListener('click', showHome);
menu[1].addEventListener('click', showProyectos);
menu[2].addEventListener('click', showAcerca);
menu[3].addEventListener('click', showContacto);
btnProyectos.addEventListener('click', showProyectos);
btnEnviar.addEventListener('click', showSuccess);

function showHome() {
    window.scrollTo(0, 0);
}

function showProyectos() {
    window.scrollTo(0, 1000);
}

function showAcerca() {
    window.scrollTo(0, 2000);
}

function showContacto() {
    window.scrollTo(0, 3000);
}

function isScrollingUp(before, after) {
    if (before > after) {
        return true;
    } else {
        return false;
    }
}

function showSuccess() {
    document.getElementById('success').style.display = 'block'
}

window.onscroll = () => {
    if (isScrollingUp(lastScroll, window.scrollY)) {
        console.log("UP");
    }
    lastScroll = window.scrollY;
}