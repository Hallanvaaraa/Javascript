'use strict';

let number = +prompt('Give an integer:');
const num_list = [];
while (!num_list.includes(number)) {
    num_list.push(number);
    number = +prompt('Give an integer:');
}
document.querySelector('#message').innerHTML = 'You have previously entered that number. Check the console.';
num_list.sort();
console.log(num_list);
