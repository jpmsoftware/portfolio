// Get DOM elements
const menu = document.querySelector('.menu');
const btnEnviar = document.querySelector('#enviar');
var sections = {};

// Events Handlers
menu.addEventListener('click', (e) => { MenuScroll(e) })

// Get sections coordinates
window.onload = () => {
    sections = {
        home: document.querySelector('.home').offsetTop,
        proyectos: document.querySelector('.proyectos').offsetTop,
        acerca: document.querySelector('.acerca').offsetTop,
        contacto: document.querySelector('.contacto').offsetTop
    }
}

btnEnviar.onclick = () => {
    const forms = document.querySelectorAll('#form-name, #form-email, #form-msg');
    window.setTimeout(() => {
        forms.forEach((element) => {
            element.value = '';
        });
    }, 1000);
    alert('Gracias por su mensaje');
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