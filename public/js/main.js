

window.onload = () => {
    markCurrentPage();
}

markCurrentPage = () => {
    const menuItems = document.getElementsByClassName('menu-item');
    const currentPage = document.getElementsByTagName('title')[0].innerHTML;
    
    //reset previous
    for(var i = 0; i < menuItems.length; i++) {
        menuItems[i].style.backgroundColor = 'transparent';
    }

    for(var i = 0; i < menuItems.length; i++) {
        if(menuItems[i].lastElementChild.innerHTML == currentPage) {
            menuItems[i].style.backgroundColor = '#3A63FF';
        }
    }
}