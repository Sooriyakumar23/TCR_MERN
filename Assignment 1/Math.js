// 3.	Create a user defined module named Math with four functions Addition,
// Subtraction, Multiplication, Division and export them. 
// Import Math module form other Node JS Script file and invoke all the four functions to perform operations on given input

function Addition(num1, num2) {
    return num1+num2;
}

function Subtraction(num1, num2) {
    return num1-num2;
}

function Multiplication(num1, num2) {
    return num1*num2;
}

function Division(num1, num2) {
    return num1/num2;
}

module.exports.Addition = Addition;
module.exports.Subtraction = Subtraction;
module.exports.Multiplication = Multiplication;
module.exports.Division = Division;