const loader = document.querySelector('.loader')
const img = document.querySelector('img')
loader.style.display = 'block';
img.style.display = 'none';
document.addEventListener('DOMContentLoaded', () => {
    loader.style.display = 'none';
    img.style.display = 'block';
})