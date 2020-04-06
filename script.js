var header = document.getElementsByTagName('header')[0];
var logo = document.querySelector('nav > a');
var menuItems = document.querySelectorAll('nav ul li a');
var lastScroll = 0;



function IsScrollingUp(pLast, pCurrent) {
    if(pLast < pCurrent) {
        return false;
    }
    else {
        return true;
    }
}