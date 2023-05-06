var outer = document.querySelector('.outer');
var commentHead = document.getElementById('comment-head');
const images = document.querySelectorAll('.image-container');
var isOpen = false;

outer.addEventListener('click', function () {
    if (!isOpen) {
        commentHead.classList.add('move');
        images[0].classList.add('move');
        images[1].classList.add('move');
        images[2].classList.add('move');
        isOpen = true;
    } else {
        commentHead.classList.remove('move');
        images[0].classList.remove('move');
        images[1].classList.remove('move');
        images[2].classList.remove('move');
        isOpen = false;
    }
});