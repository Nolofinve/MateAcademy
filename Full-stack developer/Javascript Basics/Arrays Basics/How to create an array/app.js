const words = ['one', 'two', 'three'];
const numbers = [1, 3, 1, 5, 2, 1, 4];

console.log(words, numbers);
console.log([]);
console.log(['Vasyl', 31, true]); //tumple

const numbers2 = new Array(1, 3, 1, 5, 2, 1, 4);
const numbers3 = Array(1, 3, 1, 5, 2, 1, 4);

console.log(numbers2, numbers3);

const userName = 'Vasyl';

console.log(
    userName.split(''),
    [...userName],
    Array.from(userName),
);

for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}

for (const n of numbers) {
    console.log(n);
}
