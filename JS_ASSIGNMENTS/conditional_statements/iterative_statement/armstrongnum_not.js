//WAP to check if a given number is an armstrong number or not 

function isArmstrong(num) {
    let originalNum = num;
    let numOfDigits = num.toString().length;
    let sum = 0;
  
    while (num > 0) {
      let digit = num % 10;
      sum += Math.pow(digit, numOfDigits);
      num = Math.floor(num / 10);
    }
  
    return originalNum == sum;
  }
  
  console.log(isArmstrong(153));  // Output: true
  console.log(isArmstrong(371));  // Output: true
  console.log(isArmstrong(123));  // Output: false
  