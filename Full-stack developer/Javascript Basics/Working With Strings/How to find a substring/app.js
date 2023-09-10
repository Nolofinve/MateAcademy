const text = 'Mate academy';
const part = 'mAte';

console.log(
    text.toLowerCase().includes(part.toLowerCase())
);

console.log(
    text.startsWith('ac'),
    text.endsWith('emy')
);

console.log(
    text.indexOf('a'),
    text.indexOf('a', 2),
    text.indexOf('a', 6),
);

console.log(
    text.lastIndexOf('a')
);