'use strict';
let integer = Math.floor(Math.random()*4) + 1;
let numberstr = integer.toString();
let name = prompt('Write your name: ');
let house;
switch (numberstr) {
  case '1':
    house = 'Gryffindor';
    break;
  case '2':
    house = 'Slytherin';
    break;
  case '3':
    house = 'Hufflepuff';
    break;
  case '4':
    house = 'Ravenclaw';
    break;
  default:
    console.log('Something went wrong');
}
document.querySelector('#sorted').innerHTML = name + ', you are ' + house;