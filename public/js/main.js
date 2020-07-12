//Get DOM elements
var menuicon = document.getElementById('menu-icon');


window.onload = () => {
    markCurrentPage();
}

markCurrentPage = () => {
    const menuItems = document.getElementsByClassName('menu-item');
    const currentPage = document.getElementsByTagName('title')[0].innerHTML;
    
    for(var i = 0; i < menuItems.length; i++) {
        if(menuItems[i].lastElementChild.innerHTML == currentPage) {
            menuItems[i].style.backgroundColor = '#3A63FF';
        }
    }
}

function toggleMenu(e) {
    e.classList.add("change");
}