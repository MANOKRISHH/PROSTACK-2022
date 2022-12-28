//WAP to print reverse of digits of numbers

let number = 12345;
let reverse = '';

while (number > 0) {
  reverse += number % 10;
  number = Math.floor(number / 10);
}
console.log(reverse);  // Output: 54321
