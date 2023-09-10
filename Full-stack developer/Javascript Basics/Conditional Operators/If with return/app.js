function getTitle(age) {
    if (age >= 18) {
        return'Adult';
    }
    
    if (age >= 7) {
    return 'Child';
    }
    
    if (age >= 3) {
        return'Toddler';
    }
    
    return 'Baby';
    
}

console.log(getTitle(25));
console.log(getTitle(15));
console.log(getTitle(6));
console.log(getTitle(2));