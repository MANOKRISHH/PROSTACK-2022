// WAP to print the given 3 numbers in descending order

function printNumbersInDescendingOrder(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      if (num2 > num3) {
        console.log(num1, num2, num3);
      } else {
        console.log(num1, num3, num2);
      }
    } else if (num2 > num1 && num2 > num3) {
      if (num1 > num3) {
        console.log(num2, num1, num3);
      } else {
        console.log(num2, num3, num1);
      }
    } else if (num3 > num1 && num3 > num2) {
      if (num1 > num2) {
        console.log(num3, num1, num2);
      } else {
        console.log(num3, num2, num1);
      }
    }
  }
  
  // Example usage
  printNumbersInDescendingOrder(10, 20, 30);  // prints "30 20 10"
  printNumbersInDescendingOrder(1, 2, 3);  // prints "3 2 1"
  printNumbersInDescendingOrder(-1, -2, -3);  // prints "-1 -2 -3"
  