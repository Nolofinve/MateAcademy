const title = 'Mate academy';
let count = 0;

// for (let i = 0; i < title.length; i++) {
//     if (title[i] === 'a') {
//         count++;
//     }
// }

for (const ch of title) {
    if (ch === 'a') {
        count++
    }
}

console.log(count);