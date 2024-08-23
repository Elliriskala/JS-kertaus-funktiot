/* 3. Write a JavaScript program that prompts the user to enter a series of numbers one by one and extracts and displays only the even numbers from the entered values using the for...of loop.

Define an empty array to store the numbers entered by the user.

Use a loop (e.g., while or do...while) to prompt the user for numbers and add them to the array until the user decides to stop.

Use the for...of loop to iterate over the entered values stored in the array.

Inside the loop, check if the current number is even using the modulo operator %.

If the current number is even, display it on the HTML document.

After the loop completes, display a message indicating the end of the program.
6p
*/

'use strict';

const result = document.querySelector('#target');
const numbers = [];

let input;
while (input != 'done') {
  input = prompt('Enter a number (or "done" to finish)');
  const num = parseInt(input);
  numbers.push(num);
  console.log(`Entered number: ${num}`);
}

const evenNumbers = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
    }
  }

if (evenNumbers.length > 0) {
result.insertAdjacentHTML('beforeend', `Even numbers: ${evenNumbers}`);
  } else {
  result.insertAdjacentHTML('beforeend', 'No even numbers');
}
