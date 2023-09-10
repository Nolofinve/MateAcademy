const result = getSum([2, 5, 13, 4, 5, 1, 6, 12, 9, 7]);

console.log(result);

function getSum(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    let max = numbers[0];
    
    for (const n of numbers) {
        if (n > max) {
            max = n;
        }

        sum += n;
    }

    console.log(max);

    return Math.round(sum / numbers.length);
    return Math.floor(sum / numbers.length);
    return Math.floor(sum / numbers.length);
}

