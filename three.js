const loader = document.querySelector('.loader');
const img = document.querySelector('img');

// Initially hide the image
img.style.display = 'none';

// Show loader while image is loading
img.addEventListener('load', function () {
    loader.style.display = 'none';
    img.style.display = 'block';
});