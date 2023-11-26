'use strict';

let list = document.querySelector('#list');
let ulist = document.createElement('ul');
function roll_dice() {
    return (Math.floor(Math.random() * 6) + 1);
}
let roll = 0
while (roll < 6) {
    roll = roll_dice();
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(roll));
    ulist.appendChild(item);
}
list.appendChild(ulist);