const { operations } = require('./operations.js')

const { sum, subtract, multiply } = operations;
test('sum of two numbers', () => {
    expect(sum(2, 4)).toBe(6);
});

test('subtraction of two numbers', () => {
    expect(subtract(2, 4)).toBe(-2);
});

test('multiplication of two numbers', () => {
    expect(multiply(2, 4)).toBe(8);
});