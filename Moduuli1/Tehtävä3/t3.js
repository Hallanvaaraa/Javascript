'use strict';
let numbers = [];
for (let i = 0; i < 3; i++) {
  let number = +prompt('Give an integer:');
  numbers.push(number);
}
let sum = numbers[0] + numbers[1] + numbers[2];
let product = numbers[0] * numbers[1] * numbers[2];
let avg = sum / numbers.length;
document.querySelector('#results').innerHTML = 'Sum: ' + sum + ' Product: ' +
    product + ' Average: ' + avg;
