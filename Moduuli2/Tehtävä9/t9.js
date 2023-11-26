'use strict';

function GetEvenNumbers(array) {
    const evenArray = [];
    for (let number of array) {
        if (number % 2 === 0) {
            evenArray.push(number);
        }
    }
    return evenArray;
}

const num_array = [9, 4, 7, 8, 2, 3, 3, 7, 10];
const other_array = GetEvenNumbers(num_array);
console.log(num_array);
console.log(other_array);
