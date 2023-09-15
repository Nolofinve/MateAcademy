'use strict';

const x1 = 42; // decimal

const x2 = 0b101010; // binary
const x3 = 0o52; // octal
const x4 = 0x2A; // hexadecimal
const x5 = 0x2a; // hexadecimal

console.log(x1, x2, x3, x4, x5);

let y1 = 42.000;
let y2 = 42.;

// Scientific notation

let y3 = 0.42e2; // 0.42 * (10 ** 2) === 42
let y4 = .42e2;

let y5 = 42000e-3; // 4200 / (10 ** 3) === 42

console.log(y1, y2, y3, y4, y5);
