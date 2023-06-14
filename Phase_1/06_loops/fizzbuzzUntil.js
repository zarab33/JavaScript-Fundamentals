
const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

const fizzbuzzUntil = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(fizzBuzz(i));
    }
}

module.exports = fizzbuzzUntil;
fizzbuzzUntil(10);



