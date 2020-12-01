// Get DOM elements
const floatingHeader = document.querySelector('header').cloneNode(true);
const menu = document.querySelector('.menu');
const btnEnviar = document.querySelector('#enviar');
var sections = {};

// Events Handlers
menu.addEventListener('click', (e) => { MenuScroll(e) })
floatingHeader.querySelector('.menu').addEventListener('click', (e) => { MenuScroll(e) })

// Get sections coordinates
window.onload = () => {
    document.querySelector('body').appendChild(floatingHeader);
    floatingHeader.classList.add('sticky');

    sections = {
        home: document.querySelector('.home').offsetTop,
        proyectos: document.querySelector('.proyectos').offsetTop,
        acerca: document.querySelector('.acerca').offsetTop,
        contacto: document.querySelector('.contacto').offsetTop
    }
}

window.onscroll = () => {
    if (window.pageYOffset >= 400) {
        floatingHeader.style.display = 'flex';
        floatingHeader.style.height = '4.5em';
        floatingHeader.style.padding = '0';
        floatingHeader.querySelector('.symbol').style.width = '3em';
    } else {
        floatingHeader.style.display = 'none';
        floatingHeader.querySelector('.symbol').style.width = '4.5em';
    }
}

btnEnviar.onclick = () => {
    window.setTimeout(() => {
        const forms = document.querySelectorAll('#form-name, #form-email, #form-msg');
        forms.forEach((element) => {
            element.value = '';
        });
    }, 3000)
}

function MenuScroll(e) {
    switch (e.target.id) {
        case 'home':
            window.scrollTo(0, sections.home);
            break;

        case 'proyectos':
            window.scrollTo(0, sections.proyectos - 48);
            break;

        case 'acerca':
            window.scrollTo(0, sections.acerca - 48);
            break;

        case 'contacto':
            window.scrollTo(0, sections.contacto - 48);
            break;
    }
}