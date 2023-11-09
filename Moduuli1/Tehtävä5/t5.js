'use strict';
let year = +prompt('Enter a year: ');
if (year % 4 == 0) {
  if (year % 100 != 0 || year % 400 == 0) {
    document.querySelector('#year').innerHTML = `${year} is a leap year`;
  }
  else {
    document.querySelector('#year').innerHTML = `${year} is not a leap year`;
  }
}
else {
  document.querySelector('#year').innerHTML = `${year} is not a leap year`;
}