const icon = document.querySelector('.icon');
const on = document.querySelector('.fas.fa-video');
const off = document.querySelector('.fas.fa-video-slash');

icon.addEventListener('click',() => {
    on.classList.toggle('invisible');
    off.classList.toggle('invisible');
});