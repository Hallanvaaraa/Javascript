'use strict';
let dice = +prompt('How many dice rolls?');
let target_sum = +prompt('Sum of eyes you are aiming for?');
let test_rounds = 10000;
let targets_hit = 0;
let face_sum = 0;
for (let i = 0; i < test_rounds; i++) {
  face_sum = 0;
  for (let i = 0; i < dice; i++) {
    let roll = (Math.floor(Math.random() * 6) + 1);
    face_sum += roll;
  }
  if (face_sum == target_sum) {
    targets_hit++;
  }
}
let probability = targets_hit / test_rounds * 100;
document.querySelector(
    '#probability').innerHTML = `Probability to get sum ${target_sum} with ${dice} dice is ${probability.toFixed(
    2)}%`;