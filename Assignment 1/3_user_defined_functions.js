const math = require('./Math');

const num1 = 3;
const num2 = 5;

const addition = math.Addition(num1, num2);
const subtraction = math.Subtraction(num1, num2);
const multiplication = math.Multiplication(num1, num2);
const division = math.Division(num1, num2);

console.log(`Addition of ${num1}, ${num2} is`, addition);
console.log(`Subtraction of ${num1}, ${num2} is`, subtraction);
console.log(`Multiplication of ${num1}, ${num2} is`, multiplication);
console.log(`Division of ${num1}, ${num2} is`, division);