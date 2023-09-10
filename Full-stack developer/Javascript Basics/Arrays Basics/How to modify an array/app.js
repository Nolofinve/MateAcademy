const numbers = [0, 1, 2, 3, 4];

console.log(numbers);

numbers[numbers.length] = 99;
numbers.push(100, 101, 102);
const n = numbers.pop();

numbers.unshift(100, 101, 102);
const n1 = numbers.shift();

console.log(numbers);
console.log(n);
