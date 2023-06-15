const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
 it('returns fizz when number can be divided by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns buzz when number can be divided by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns the number when number cannot be divided by 3 or 5', () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it('returns fizzbuzz when number can be divided by 3 & 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
})