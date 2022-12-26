//WAP to find the largest of three numbers

// prompt the user to enter three numbers
var num1 = 15;
var num2 = 29;
var num3 = 6;

// convert the numbers from strings to integers
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

// compare the numbers and output the largest one
if (num1 > num2 && num1 > num3) {
  console.log("The largest number is: " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("The largest number is: " + num2);
} else {
  console.log("The largest number is: " + num3);
}
