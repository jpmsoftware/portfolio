// Get DOM elements
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');
const burger = document.querySelector('.burger');
const btnEnviar = document.querySelector('#enviar');
const footer = document.querySelector('footer');
var sections = {};

// Events Handlers
menu.addEventListener('click', (e) => { MenuScroll(e) })
menuMobile.addEventListener('click', (e) => { MenuScroll(e) })
footer.addEventListener('click', (e) => { MenuScroll(e); })

// Get sections coordinates
window.onload = () => {
    sections = {
        home: document.querySelector('.home').offsetTop,
        proyectos: document.querySelector('.proyectos').offsetTop,
        acerca: document.querySelector('.acerca').offsetTop,
        contacto: document.querySelector('.contacto').offsetTop
    }
}

window.onscroll = () => {
    if(window.pageYOffset > 400) {
        header.classList.add('sticky');
        document.querySelector('.symbol').style.width = '3em';
    } else {
        header.classList.remove('sticky');
        document.querySelector('.symbol').style.width = '4.5em';
    }
}

burger.onclick = () => {
    menuMobile.classList.toggle('visible');
}

btnEnviar.onclick = () => {
    const msg = document.querySelector('#msg');
    msg.innerHTML = 'Gracias por enviar su mensaje';
    msg.classList.toggle('send');
    window.setTimeout(() => {
        msg.innerHTML = 'Envíame tu mensaje y te responderé a la brevedad';
        msg.classList.toggle('send');
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