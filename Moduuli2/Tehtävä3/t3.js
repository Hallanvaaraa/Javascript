'use strict';
let d_list = [];
for (let i = 1 ; i <= 6; i++) {
  let dog = prompt(`Give names of 6 dogs. Name of ${i}. dog:`);
  d_list.push(dog);
}
d_list.sort();
d_list.reverse();
let unord_list = document.createElement('ul');
for (let i = 0; i < d_list.length; i++) {
  let item = document.createElement('li');
  item.appendChild(document.createTextNode(d_list[i]));
  unord_list.appendChild(item);
}
document.getElementById('doggos').appendChild(unord_list);