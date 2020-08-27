//DOM ELEMENTS
const header = document.getElementsByTagName('header')[0];
const menu = document.getElementsByClassName('menu-item');
const btnProyectos = document.getElementById('button-proyectos');
const btnEnviar = document.getElementById('enviar');
const menuMobile = document.getElementById('menu-mobile');
const footer = document.getElementsByTagName('footer')[0];
var sections;
var lastScroll = 0;

//EVENTS
menu[0].addEventListener('click', () => window.scrollTo(0, sections.home));
menu[1].addEventListener('click', () => window.scrollTo(0, sections.proyectos));
menu[2].addEventListener('click', () => window.scrollTo(0, sections.acerca));
menu[3].addEventListener('click', () => window.scrollTo(0, sections.contacto));
btnProyectos.addEventListener('click', () => window.scrollTo(0, sections.proyectos));

window.onload = () => {
    //GET SECTIONS COORDINATES
    sections = {
        home: document.getElementById('home').offsetTop,
        proyectos: document.getElementById('proyectos').offsetTop,
        acerca: document.getElementById('acerca').offsetTop,
        contacto: document.getElementById('contacto').offsetTop
    }
}

menuMobile.onclick = () => {
    let menu = document.getElementsByClassName('menu')[0];
    if (menu.style.display == '' || menu.style.display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

footer.onclick = (e) => {
    switch (e.target.innerHTML) {
        case 'HOME':
            window.scrollTo(0, sections.home);
            break;

        case 'PROYECTOS':
            window.scrollTo(0, sections.proyectos);
            break;

        case 'ACERCA':
            window.scrollTo(0, sections.acerca);
            break;

        case 'CONTACTO':
            window.scrollTo(0, sections.contacto);
            break;
    }
}
