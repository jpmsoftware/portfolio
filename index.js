var btnUp = document.getElementById('btn-up')
var burger = document.getElementById('burger');

window.onscroll = () => {
    if (window.pageYOffset >= 350) {
        btnUp.style.display = 'block';
        btnUp.style.animation = 'FadeIn 1.5s 1';
    } else {
        btnUp.style.animation = 'FadeOut 1.5s 1';
        setInterval(() => {
            // btnUp.style.display = 'none';
        }, 1500);
    }
}

function ShowMenu () {
    burger.style.rotate = 90;
}