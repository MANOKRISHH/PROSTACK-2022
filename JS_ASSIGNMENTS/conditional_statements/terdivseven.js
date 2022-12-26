//WAP to check if a number is divisble by 7 or not using a ternary operator

// prompt the user to enter a number
var num = 7;

// convert the number from a string to an integer
num = parseInt(num);

// use a ternary operator to check if the number is divisible by 7
var result = (num % 7 === 0) ? "The number is divisible by 7" : "The number is not divisible by 7";

// output the result
console.log(result);
