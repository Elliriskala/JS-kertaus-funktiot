/* 6. Write a program that allows users to track and rate their favorite movies. The program should prompt the user to enter the details of each movie, including the title and rating on a scale of 1 to 5. The program should store the user input in an array of objects using object literals. Once all the movie ratings have been entered, the program should sort the movies based on their ratings and determine the highest-rated movie. Finally, it should display the sorted list of movies and the highest-rated movie on the HTML document.

Use object literals to represent each movie, with properties such as title and rating.
Prompt the user to enter the number of movies they want to rate.
Use a loop to gather user input for each movie, including the title and rating. Store the movie details in an array of objects.
Sort the array of movie objects based on the ratings, from highest to lowest.
Determine the highest-rated movie by accessing the first element of the sorted array.
Display the sorted list of movies and the highest-rated movie on the HTML document.
6p

*/

'use strict';

const target = document.querySelector('#target');

const movies = [];

const num = prompt('Enter number of movies you would like to rate:')

for (let i = 0; i < num; i++) {
  const title = prompt('Enter name of the movie:');
  const rating = prompt('Enter rating from 1 to 5:');
  const movie = {
    title,
    rating,
  };

  movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

for (const movie of movies) {
  const html = `<tr>
                  <td>${movie.title}</td>
                  <td>${movie.rating}</td>
                </tr>`;
  target.insertAdjacentHTML('beforeend', html);
}




