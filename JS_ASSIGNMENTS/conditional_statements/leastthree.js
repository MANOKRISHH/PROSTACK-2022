//WAP to print the least number in given three numbers

// Initialize the three numbers
let num1 = 5;
let num2 = 10;
let num3 = 15;

// Determine which number is the least
if (num1 < num2 && num1 < num3) {
  // If num1 is the least, print it
  console.log(num1);
} else if (num2 < num1 && num2 < num3) {
  // If num2 is the least, print it
  console.log(num2);
} else {
  // If neither num1 nor num2 are the least, num3 must be
  console.log(num3);
}

