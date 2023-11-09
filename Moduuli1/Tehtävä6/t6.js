'use strict';
let should = confirm('Should I calculate the square root?');
if (should == false) {
  document.querySelector(
      '#result').innerHTML = 'The square root is not calculated.';
}
else {
  let number = parseFloat(prompt('Give a number:'));
  if (number < 0) {
    document.querySelector(
        '#result').innerHTML = 'The square root of a negative number is not defined.';
  }
  else {
    document.querySelector(
        '#result').innerHTML = `Square root of ${number} is ${Math.sqrt(
        number)}`;
  }
}