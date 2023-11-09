'use strict';
let start_year = +prompt('Give a start year: ');
let end_year = +prompt('Give an end year: ');
let leap_years = [];
for (let year = start_year + 1; year <end_year; year++) {
  if (year % 4 == 0) {
    if (year % 100 != 0 || year % 400 == 0) {
      leap_years.push(year);
    }
  }
}
let list = document.createElement('ul');
for (let i = 0; i < leap_years.length; i++) {
  let item = document.createElement('li');
  item.appendChild(document.createTextNode(leap_years[i]));
  list.appendChild(item);
}
document.querySelector('#years').innerHTML = `Leap years between ${start_year} and ${end_year} are:`;
document.getElementById('list').appendChild(list);