'use strict';

const name1 = 'Hedgehog';
const name2 = 'apple';

console.log(
  name1.toLowerCase() > name2.toLocaleLowerCase()
);

const word1 = 'їжачок';
const word2 = 'яблуко';

console.log(
  word1.localeCompare(word2) > 0
);
