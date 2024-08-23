/* 4. Create a function called sortArray that accepts an array of numbers as a parameter and returns a new array with the numbers sorted in ascending order.

No need to prompt for the numbers. Use a hard coded array. Use console.log to print the original array and the sorted array.
2p
*/

'use strict';

const numbers = ['5', '9', '4', '3', '8'];
console.log(`Numbers: `, numbers)

function sortArray(numbers) {
  numbers.sort((a, b) => a - b);
  console.log(`Sorted numbers: `, numbers);
}

sortArray(numbers);
