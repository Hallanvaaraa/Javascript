'use strict';
let test_number = +prompt('Give a positive integer:');
let remainder = []
if (test_number <= 1) {
  document.querySelector('#isprime').innerHTML = `${test_number} is not a prime number.`;
}
else if (test_number > 1) {
  for (let divider = 2; divider < test_number; divider++) {
    remainder.push(test_number % divider);
  }
  if (remainder.includes(0)) {
    document.querySelector('#isprime').innerHTML = `${test_number} is not a prime number.`;
  }
  else {
    document.querySelector('#isprime').innerHTML = `${test_number} is a prime number.`;
  }
}