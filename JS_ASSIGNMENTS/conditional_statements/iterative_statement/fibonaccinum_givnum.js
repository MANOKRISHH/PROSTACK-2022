//WAP to print the fibonacci number series up to a given number 17

let num1 = 0;
let num2 = 1;
let next;

console.log(num1);
console.log(num2);

for (let i = 3; i <= 17; i++) {
  next = num1 + num2;
  num1 = num2;
  num2 = next;
  console.log(next);
}
