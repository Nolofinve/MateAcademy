let cashInPocket = 50;
let cardAmount = 20;
const price = 40;

const hasEnoughCash = cashInPocket >= price;
const canPayWithCard = cardAmount >= price;

const canBuy = hasEnoughCash || canPayWithCard;

console.log(canBuy);