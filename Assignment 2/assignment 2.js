/* 2. Write a JavaScript program that focuses on various array operations using the push(), includes(), pop(), and numerical sorting functions. Your program should include the following requirements:

Create an empty array called numbers.

Prompt the user to enter five numbers, one by one, and add each entered number to the numbers array using the push() method.

Display the contents of the numbers array on the HTML document or in the console.

Prompt the user to enter a number and check if the entered number is included in the numbers array using the includes() method.

Display a message indicating whether the entered number is found or not found in the numbers array.

Remove the last number from the numbers array using the pop() method.

Display the updated numbers array on the HTML document or in the console.

Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function.

Display the sorted numbers array on the HTML document or in the console.
3p
*/

'use strict';

const numbers = [];

for (let i=0; i<=4; i++) {
  const number = prompt('Enter your ' + [i+1] + '. number');
  numbers.push(number);
}

console.log(`Numbers:`, numbers);

const input = prompt('Input a number to search');
console.log(`Entered number: ${input}`)
if (numbers.includes(input)) {
  console.log(`The number ${input} is included in the numbers array.`);
} else {
  console.log(`The number you entered is not included in the numbers array.`);
}

numbers.pop();
console.log(`Updated numbers; `, numbers);
numbers.sort()
console.log(`Sorted numbers: `, numbers);

const result = document.querySelector('#target');
result.innerHTML = `Your numbers: ${numbers}`;


