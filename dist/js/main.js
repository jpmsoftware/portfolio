const menu = document.getElementsByClassName('menu-item');
const btnProyectos = document.getElementById('button-proyectos');

menu[0].addEventListener('click', showHome);
menu[1].addEventListener('click', showProyectos);
menu[1].addEventListener('click', showAcerca);
menu[1].addEventListener('click', showContacto);
btnProyectos.addEventListener('click', showProyectos);

function showHome() {

}

function showProyectos() {
    window.scrollTo(0, 1000);
}

function showAcerca() {
    
}

function showContacto() {
    
}