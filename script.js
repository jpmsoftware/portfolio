var btnUp = document.getElementById('btn-up')
var burger = document.getElementById('burger');
var modal = document.getElementById('contacto');

window.onload = () => {
    
}

window.onscroll = () => {
    if (window.pageYOffset >= 350) {
        btnUp.style.display = 'block';
        btnUp.style.animation = 'FadeIn 1s 1';
    } else {
        btnUp.style.animation = 'FadeOut 0.7s 1';
        btnUp.style.animationFillMode = 'forwards';
    }
}

window.onclick = (event) => {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}

function ScrollUp() {
    window.scrollTo(0, 0);
}

function ShowModal() {
    modal.style.display = 'block';
    return false;
}

function CloseModal() {

}