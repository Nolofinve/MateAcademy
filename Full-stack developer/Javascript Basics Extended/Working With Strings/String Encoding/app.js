'use strict';

const message = '\\ \'He\tllo \nworld! 🔔\xA9 \u23F3 \u{1f514}'; // 10FFFF

console.log(message);

let str = '';

for (let i = 1; i < 256; i++) {
  str += String.fromCodePoint(i);
}

console.log(str);
