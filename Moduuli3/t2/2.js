'use strict';
const list = ['First item', 'Second item', 'Third item']
const target = document.querySelector('#target');

for (let i = 0; i < list.length; i++) {
    let item = document.createElement('li');
    if (i == 1) {
        item.setAttribute('class', 'my-item');
    }
    item.appendChild(document.createTextNode(list[i]));
    target.appendChild(item);
}