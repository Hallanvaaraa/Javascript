'use strict';
let dice_rolls = +prompt('How many dice rolls?');
let faces = []
for (let i=0; i < dice_rolls; i++) {
  faces.push(Math.floor(Math.random() * 6) + 1);
}
let face_sum = 0
for (let i =0; i < faces.length; i++) {
   face_sum += faces[i];
}
document.querySelector('#face_sum').innerHTML = `The sum of dice rolls is ${face_sum}`;
