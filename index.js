var header = document.querySelector("header");
var menuItems = document.querySelectorAll("li");
console.log(menuItems[0]);

window.onscroll = () => {
    if (window.pageYOffset >= header.offsetTop + 300) {
        header.classList.add("sticky");
        menuItems.classList.add("sticky-li-adjust");
    } else {
        header.classList.remove("sticky");
        menuItems.classList.add("sticky-li-adjust");
    }
}