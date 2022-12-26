//WAP to check if a number is three digit numbers or not using a ternary operator 

// prompt the user to enter a number
var num = 346;

// convert the number from a string to an integer
num = parseInt(num);

// use a ternary operator to check if the number is a three-digit number
var result = (num >= 100 && num < 1000) ? "The number is a three-digit number" : "The number is not a three-digit number";

// output the result
console.log(result);
