/* 5. Enhance the existing sortArray function to include an additional parameter that defines whether the array should be sorted in ascending or descending order.

Create a function called sortArray that takes two parameters: numbers (an array of numbers) and order (a string indicating the sorting order).

If the order parameter is set to "asc" (ascending), the function should sort the numbers array in ascending order.

If the order parameter is set to "desc" (descending), the function should sort the numbers array in descending order.

Return a new array with the sorted numbers.

Test the function by passing different arrays and sorting orders.
3p
*/

'use strict';

const numbers = [5, 2, 8, 1, 9];
console.log(`Numbers: `, numbers)

let sorted;
function sortArray(numbers, order) {
  if (order == 'asc') {
    sorted = numbers.sort((a, b) => a - b);
  } else if (order == 'desc') {
    sorted = numbers.sort((a, b) => b - a);
  }
  return sorted;
}

console.log(`Ascending order: `, sortArray(numbers, 'asc'));
console.log(`Descending order: `, sortArray(numbers, 'desc'));

