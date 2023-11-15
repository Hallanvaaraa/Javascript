'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.querySelector('#target');
for (let student of students) {
  let option = document.createElement('option');
  option.setAttribute('value', `${student.id}`)
  option.appendChild(document.createTextNode(`${student.name}`));
  target.appendChild(option)
}