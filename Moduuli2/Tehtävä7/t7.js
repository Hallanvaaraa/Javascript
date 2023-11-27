'use strict';

function roll_dice() {
    return (Math.floor(Math.random() * sides) + 1);
}

const sides = +prompt('How many sides on a die?');
document.querySelector('#sides').innerHTML = `on a ${sides}-sided die:`;
let list = document.querySelector('#list');
let ulist = document.createElement('ul');
let roll = 0
while (roll < sides) {
    roll = roll_dice();
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(roll));
    ulist.appendChild(item);
}
list.appendChild(ulist);