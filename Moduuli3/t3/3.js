'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target');
for (let name of names) {
    let html = `<li>${name}</li>`;
    target.innerHTML += html;
}