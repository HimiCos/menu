var outer = document.querySelector('.outer');
var imageContainers = document.querySelectorAll('.image-container');
var isOpen = false;

outer.addEventListener('click', function () {
    if (!isOpen) {
        for (var i = 0; i < imageContainers.length; i++) {
            var imageContainer = imageContainers[i];
            outer.style.height = '666px';
            if (imageContainer.classList.contains('image1')) {
                imageContainer.style.top = '292px';
            } else if (imageContainer.classList.contains('image2')) {
                imageContainer.removeAttribute('style');
                imageContainer.style.top = '0';
                imageContainer.style.height = '380px';
            } else if (imageContainer.classList.contains('image3')) {
                imageContainer.style.top = '384px';
            }
        }
        isOpen = true;
    } else {
        for (var i = 0; i < imageContainers.length; i++) {
            var imageContainer = imageContainers[i];
            outer.style.height = '320px';
            if (imageContainer.classList.contains('image1')) {
                imageContainer.removeAttribute('style');
            } else if (imageContainer.classList.contains('image2')) {
                imageContainer.removeAttribute('style');
                imageContainer.style.transition = 'all 0.5s';
            } else if (imageContainer.classList.contains('image3')) {
                imageContainer.removeAttribute('style');
            }
        }
        isOpen = false;
    }
});