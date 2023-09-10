let cashInPocket = 50;
let age = 25;


const price = 40;
const ageLimit = 18;

const hasEnoughMoney = cashInPocket >= price;
const isAdult = age >= ageLimit;

const canBuy = hasEnoughMoney && isAdult;

console.log(canBuy);