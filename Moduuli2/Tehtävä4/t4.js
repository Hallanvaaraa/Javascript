'use strict';
const num_list = [];
let num = +prompt('Give a number or enter 0 to end:');
while (num != 0) {
  num_list.push(num);
  num = +prompt('Give a number or enter 0 to end:');
}
num_list.sort((a, b) => b - a);
console.log(num_list);