var menuItems = document.querySelector('.menu');
var cards = document.querySelectorAll('.card');
var textBoxes = document.querySelectorAll('#form-name, #form-email, #form-msg');
var sections = {};

pageLoadStarted();

menuItems.addEventListener('click', (e) => {
    MenuScroll(e)
})

window.onload = () => {
    window.setTimeout(() => {
        // Unblock scroll and hide loading div (with animation .5seconds)
        document.querySelector('body').classList.remove('block-scroll');
        window.setTimeout(() => {
            document.querySelector('.loading').classList.add('hidden');
        }, 500)
        document.querySelector('.loading').style.animation = 'FadeOut .5s 1';
    }, 500);

    // Get sections' Y position
    sections = {
        home: document.querySelector('.home').offsetTop,
        proyectos: document.querySelector('.proyectos').offsetTop,
        acerca: document.querySelector('.acerca').offsetTop,
        contacto: document.querySelector('.contacto').offsetTop
    }
}

function MenuScroll(e) {

    var sectionId = e.target.id;

    switch (sectionId) {
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

function pageLoadStarted() {
    window.scrollTo(0, 0);
    document.querySelector('body').classList.add('block-scroll');
}