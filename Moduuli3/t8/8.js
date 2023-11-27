'use strict';

const btn = document.querySelector('#start');
const answer = document.querySelector('#result');

function calculate(one, two) {
    var operation = document.querySelector('#operation').value;
    var result;
    switch (operation) {
        case 'add' :
            result = one + two;
            break;
        case 'sub' :
            result = one - two;
            break;
        case 'multi' :
            result = one * two;
            break;
        case 'div' :
            result = one / two;
            break;
    }
    return result;
}


btn.addEventListener('click', function () {
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);
    answer.innerHTML = calculate(num1, num2)
})
