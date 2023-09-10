function builHouse(numberOfFloors = 3, color = 'white') {
    const house = `${color} ${numberOfFloors}-floors house`;

    return house;
}

const smallHouse = builHouse();
const bigHouse = builHouse(9, 'red');

console.log(smallHouse);
console.log(bigHouse);