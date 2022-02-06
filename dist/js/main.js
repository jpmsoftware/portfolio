var menuItems = document.getElementsByClassName('menu-item');
var navItems = document.getElementsByClassName('nav-item');
var currentSection = document.getElementById('home');

Array.from(menuItems).forEach((item) => {
    item.addEventListener('click', (e) => {
        updatePosition(e);
    });
});

Array.from(navItems).forEach((item) => {
    item.addEventListener('click', (e) => {
        updatePosition(e);
    });
});

window.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        if (currentSection.previousElementSibling.tagName == 'SECTION') {

            // search element and trigger click event
            for (var i = 0; i < navItems.length; i++) {
                if (navItems[i].name == currentSection.previousElementSibling.id) {
                    navItems[i].click();
                }
            }

            window.scrollTo(0, currentSection.previousElementSibling.offsetTop);
            currentSection = currentSection.previousElementSibling;
        }
    } else {
        if (currentSection.nextElementSibling.tagName == 'SECTION') {
            
            // search element and trigger click event
            for (var i = 0; i < navItems.length; i++) {
                if (navItems[i].name == currentSection.nextElementSibling.id) {
                    navItems[i].click();
                }
            }

            window.scrollTo(0, currentSection.nextElementSibling.offsetTop);
            currentSection = currentSection.nextElementSibling;
        }
    }
});

function updatePosition(e) {
    if (e.target.classList.length <= 1) {
        Array.from(navItems).forEach((item) => {
            if (item.classList.length > 1) {
                item.classList.remove('current');
            } else if (item.name == e.target.name) {
                item.classList.add('current');
            }
        });
    }
}