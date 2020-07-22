//Get DOM elements
const menuicon = document.getElementById('menu-icon');
const menu = document.getElementsByClassName('menu')[0];

window.onload = () => {
    markCurrentPage();
}

markCurrentPage = () => {
    const menuItems = document.getElementsByClassName('menu-item');
    const currentPage = document.getElementsByTagName('title')[0].innerHTML;
    
    for(var i = 0; i < menuItems.length; i++) {
        if(menuItems[i].lastElementChild.innerHTML == currentPage) {
            menuItems[i].style.backgroundColor = '#002CD2';
        }
    }
}

function toggleMenu(e) {
    e.classList.toggle('change');
    if(menu.style.display == '' || menu.style.display == 'none') {
        menu.style.display = 'flex';
    } 
    else {
        menu.style.display = 'none';
    }
}