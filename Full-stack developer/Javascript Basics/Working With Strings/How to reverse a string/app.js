const title = 'Mate academy';
let reversed = '';


// for (let i = title.length - 1; i >= 0; i--) {
//     reversed += title[i];
// }

for (const ch of title) {
    reversed = ch + reversed;
}

console.log(reversed);