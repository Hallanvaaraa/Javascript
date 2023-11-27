'use strict';

function roll_dice() {
    return (Math.floor(Math.random() * 6) + 1);
}

let list = document.querySelector('#list');
let ulist = document.createElement('ul');
let roll = 0
while (roll < 6) {
    roll = roll_dice();
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(roll));
    ulist.appendChild(item);
}
list.appendChild(ulist);