const title = '  Mate academy   ';

console.log(title, title.length);


/* upper and lower case */

console.log(
    title.toUpperCase()
);
console.log(
    title.toLowerCase()
);

// trim

console.log(
    title.trim(), // .trimLeft(), trimRight()
    title.trim().length
);

// repleace

console.log(
    title.replace('a', '_'),
);

console.log(
    title.replaceAll('a', '_')
);