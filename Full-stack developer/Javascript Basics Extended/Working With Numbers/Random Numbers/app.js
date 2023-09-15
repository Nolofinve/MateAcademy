'use strict';

for (let i = 0; i < 10; i++) {
  const x = getRandomNumber(2, 7);

  console.log(x);
}

function getRandomNumber(min, max) {
  return Math.floor(
    min + Math.random() * (max + 1 - min)
  ) // [min; max)
}
