'use strict';

let x = 12.345;

console.log(x);

console.log(`Math.floor(${x}) = `, Math.floor(x), 'closest <= x');
console.log(`Math.ceil(${x}) = `, Math.ceil(x), 'closest >= x');
console.log(`Math.trunc(${x}) = `, Math.trunc(x), 'without decimal part');
console.log(`Math.round(${x}) = `, Math.round(x * 100) / 100, 'down < 0.5, up >= 0.5');

console.log(`x.toFixed(0)     =`, x.toFixed(2));
