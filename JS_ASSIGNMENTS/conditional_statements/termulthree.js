//WAP to check if a number is multiple of 3 or not using a ternary operator

// prompt the user to enter a number
var num = 16;

// convert the number from a string to an integer
num = parseInt(num);

// use a ternary operator to check if the number is a multiple of 3
var result = (num % 3 === 0) ? "The number is a multiple of 3" : "The number is not a multiple of 3";

// output the result
console.log(result);
