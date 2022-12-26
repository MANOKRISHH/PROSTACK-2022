//WAP to print even or odd for a given number using a ternary number

// prompt the user to enter a number
var num = 24;

// convert the number from a string to an integer
num = parseInt(num);

// use a ternary operator to check if the number is even or odd
var result = (num % 2 === 0) ? "even" : "odd";

// output the result
console.log("The number is " + result);
