// Author: Muliri Shebirongo Jonathan <Joshebirongo>

const numbers = [
  12, 7.45, 98, 3.14, 56, 42.8, 19, 73.21, 5, 64.9, 28, 91.33, 14, 8.6, 37,
  60.12, 2, 77.5, 49, 11.09, 83, 25.7, 6, 94.44, 31, 16.8, 70, 53.26, 9, 88.1,
];

/* 
challenge
1. how many numbers are les than 45.67?
2. how many numbers are greather than 59.98?
*/

let number1 = 0;
let number2 = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 45.67) {
    number1++;
  }
  if (numbers[i] > 59.98) {
    number2++;
  }
}
console.log(`The numbers less than 45.75 are: ${number1}`);
console.log(`The numbers greater than 59.98 are: ${number2}`);
