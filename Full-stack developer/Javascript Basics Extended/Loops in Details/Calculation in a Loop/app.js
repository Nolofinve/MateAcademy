'use strict';

const SECONDS_IN_DAY = 24 * 60 * 60;

for (let daysAgo = 0; daysAgo < 1e1; daysAgo++) {
  const secondAgo = daysAgo * SECONDS_IN_DAY;

  console.log(secondAgo);
}
