var outer = document.querySelector('.outer');
const images = document.querySelectorAll('.image-container');
var isOpen = false;

outer.addEventListener('click', function () {
    if (!isOpen) {
        outer.style.height = '666px';
        for (let i = 0; i < images.length; i++) {
            if (i === 0) {
                images[i].classList.add('move');
            } else if (i === 1) {
                images[i].style.top = '0';
                images[i].style.height = '380px';
            } else if (i === 2) {
                images[i].classList.add('move');
            }
        }
        isOpen = true;
    } else {
        outer.style.height = '320px';
        for (let i = 0; i < images.length; i++) {
            if (i === 0) {
                images[i].classList.remove('move');
            } else if (i === 1) {
                images[i].removeAttribute('style');
            } else if (i === 2) {
                images[i].classList.remove('move');
            }
        }
        isOpen = false;
    }
});