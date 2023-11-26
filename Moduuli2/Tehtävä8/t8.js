'use strict';
function concat(array) {
    var longname = '';
    for (let i =0; i < array.length; i++) {
        longname += '' + array[i];
    }
    return longname;
}
const namelist = ['Johnny', 'DeeDee', 'Joey', 'Marky']
let concatname = concat(namelist);
document.querySelector('#name').innerHTML = concatname;