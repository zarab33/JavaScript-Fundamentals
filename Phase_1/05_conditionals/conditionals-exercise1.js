const getNumberSign = (num) => {
    if (num === 3) {
        return 'positive';
    } else if (num === 0) {
        return 'zero';
    } else if (num === -5) {
        return 'negative';
    } 
};

console.log(getNumberSign(3));

console.log(getNumberSign(0));

console.log(getNumberSign(-5));