'use strict';

// debugger;

let i = 0;
let j = 1;

for (;;) {
  if (i >= 3) {
    break;
  }

  console.log(i, j);

  i++;
  j--;
}