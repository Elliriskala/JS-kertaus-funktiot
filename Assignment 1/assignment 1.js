/* 1. Write a JavaScript program that focuses on the basic concepts of arrays. Your program should include the following requirements:

Create an array called fruits and initialize it with the following elements: "apple", "banana", "orange", " grape", "kiwi".
Display the contents of the fruits array in the console.
Calculate and display the length of the fruits array.
Access and display the element at index 2 in the fruits array in the console.
Access and display the last element in the fruits array using the length property in the console.
Create an empty array called vegetables.
Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables array using the push() method.
Display the contents of the vegetables array in the console.
Calculate and display the length of the vegetables array.
3p
*/

'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(`Fruits: `, fruits);

console.log(`The lenght of the fruits array: ${fruits.length}`);

console.log(`The element at second index in the fruits array: ${fruits[2]}`);

const lastelement = fruits[fruits.length-1];
console.log(`Last element of fruits: ${lastelement}`);

const vegetables = [];

for (let i=0; i<=2; i++) {
  const input = prompt('Enter a vegetable');
  vegetables.push(input);
}

console.log(`Vegetables:`, vegetables);
console.log(`Lenght of vegetables: ${vegetables.length}`);
