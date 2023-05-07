window.onload = function () {
    var outer = document.querySelector('.outer');
    var commentHead = document.getElementById('comment-head');
    var commentBody = document.querySelector('.tk-comments');
    var footer = document.getElementById('footer');
    const images = document.querySelectorAll('.image-container');
    var isOpen = false;

    outer.addEventListener('click', function () {
    if (!isOpen) {
        images[0].classList.add('move');
        images[1].classList.add('move');
        images[2].classList.add('move');
        commentHead.classList.add('move');
        commentBody.classList.add('move');
        footer.classList.add('move');
        isOpen = true;
    } else {
        images[0].classList.remove('move');
        images[1].classList.remove('move');
        images[2].classList.remove('move');
        commentHead.classList.remove('move');
        commentBody.classList.remove('move');
        footer.classList.remove('move');
        isOpen = false;
    }
});
};