'use strict';
const participants = +prompt('How many participants?');
let p_list = [];
for (let i = 1 ; i <= participants; i++) {
  let participant = prompt(`Name of ${i}. participant:`);
  p_list.push(participant);
}
p_list.sort();
let ord_list = document.createElement('ol');
for (let i = 0; i < p_list.length; i++) {
  let item = document.createElement('li');
  item.appendChild(document.createTextNode(p_list[i]));
  ord_list.appendChild(item);
}
document.getElementById('namelist').appendChild(ord_list);