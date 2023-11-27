'use strict';

const picture = document.querySelector('#target');

function hoverchange(evt) {
    picture.setAttribute('src', 'img/picB.jpg');
    picture.removeEventListener('mouseover', hoverchange);
    picture.addEventListener('mouseout', hoverover);
}

function hoverover(evt) {
    picture.setAttribute('src', 'img/picA.jpg');
    picture.removeEventListener('mouseout', hoverover);
    picture.addEventListener('mouseover', hoverchange);
}

picture.addEventListener('mouseover', hoverchange);
