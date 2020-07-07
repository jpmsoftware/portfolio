//Get DOM Elements
const menuItems = document.getElementsByClassName('nav-bar-item');
const sections = document.getElementsByTagName('section');

//menu
toggleSection = (e) => {
    console.log(e.target);
    switch (e.target.name) {
        case 'inicio':
            showSection(0);
            break;

        case 'acerca':
            showSection(1);
            break;

        case 'proyectos':
            showSection(2);
            break;

        case 'contacto':
            showSection(3);
            break;

        default:
    }
}

//Add Events
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', toggleSection, false);
}


//show selected section, hide the rest
showSection = (sectionId) => {
    sections.forEach(element => {
        element.style.display = 'none';
    });

    sections.forEach(element => {
        if(element.id === sectionId) {
            element.style.display = 'block';
        }
    });
}

//Default (first time)
window.onload = () => {
    
}