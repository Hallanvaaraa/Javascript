'use strict';
let lista = [];
for (let i = 1; i <= 5; i++) {
  let num = +prompt(`Give ${i}. number:`);
  lista.push(num);
}
for (let i = lista.length-1; i >=0; i--) {
  console.log(lista[i]);
}