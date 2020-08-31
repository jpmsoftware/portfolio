//DOM ELEMENTS
const header = document.querySelector('header');
const menuItems = document.querySelectorAll('.menu-item');
const btnProyectos = document.querySelector('#button-proyectos');
const btnEnviar = document.querySelector('#enviar');
const menuMobile = document.querySelector('.menu-mobile');
const footer = document.querySelector('footer');
const floatingMenu = document.querySelector('.floating-menu');
var sections;
var lastScroll = 0;

//EVENTS
menuItems[0].addEventListener('click', () => window.scrollTo(0, sections.home));
menuItems[1].addEventListener('click', () => window.scrollTo(0, sections.proyectos));
menuItems[2].addEventListener('click', () => window.scrollTo(0, sections.acerca));
menuItems[3].addEventListener('click', () => window.scrollTo(0, sections.contacto));
btnProyectos.addEventListener('click', () => window.scrollTo(0, sections.proyectos));

window.onload = () => {
    //GET SECTIONS COORDINATES
    sections = {
        home: document.querySelector('.home').offsetTop,
        proyectos: document.querySelector('.proyectos').offsetTop,
        acerca: document.querySelector('.acerca').offsetTop,
        contacto: document.querySelector('.contacto').offsetTop
    }
}

window.onscroll = () => {
    if (window.scrollY > sections.proyectos - 200) {
        floatingMenu.style.display = 'flex';
    } else {
        floatingMenu.style.display = 'none';
    }
}

menuMobile.onclick = () => {
    let menu = document.querySelector('.menu');
    menu.classList.add('mobile');
    menu.classList.remove('menu');
    console.log(menu.classList);
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

floatingMenu.onclick = (e) => {
    switch (e.target.id) {
        case 'home':
            window.scrollTo(0, sections.home);
            break;

        case 'proyectos':
            window.scrollTo(0, sections.proyectos);
            break;

        case 'acerca':
            window.scrollTo(0, sections.acerca);
            break;

        case 'contacto':
            window.scrollTo(0, sections.contacto);
            break;
    }
}
