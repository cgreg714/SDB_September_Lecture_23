//! Iteration Methods
/* 
    - These DO NOT destroy the original array
    - Take in a callback function
    -loop through arrays
    - MUST have a return
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

//! Arrow Function w/ block body
const filteredFruit = fruits.filter(fruit => {
    //console.log('Parameter:', fruit)
    let result = fruit !== 'mango';
    //console.log('Inside Filter:', result);
    return result;
});

console.log(filteredFruit);
/* 
Parameter: apple
Inside Filter: true
Parameter: pear
Inside Filter: true
Parameter: mango
Inside Filter: false
Parameter: orange
Inside Filter: true
Parameter: pineapple
Inside Filter: true
[ 'apple', 'pear', 'orange', 'pineapple' ]
*/

let fruit1 = 'pineapple';
// does the 'fruit1' variable include the word 'apple'?
console.log(fruit1.includes('apple'));
//returns 'true'
//! Arrow function w/ concise body
                    // give me everything that DOES NOT include the word 'apple'
const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
console.log(filteredFruit2);

//function example -  this allows you to call on the function elsewhere in the code.
function removeMango(fruit) {
    return fruit !== 'mango'
}
//this creates a completely new array by invoking the removeMango function
const filterFruit3 = fruits.filter(removeMango)
console.log(filterFruit3);  // provides ['apple', 'pear', 'orange', 'pineapple' ]


let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

const noFives = myNumberArray.filter(myNumberArray => {
    //console.log(typeof myNumberArray);
let string = myNumberArray.toString();
let results = !string.includes('5');
   // console.log(results);
    return results
});

console.log(noFives);

// Challenge: Filter movies by genre

let movies = [
    { name: "Top Gun 2", category: 'Action' },
    { name: "Scary Movie 5", category: 'Horror' },
];

movies.push({ name: "It", category: 'Horror' });
movies.push({ name: "Get Out", category: 'Horror' });
movies.push({ name: "Taken", category: 'Action' });

const actionMovies = movies.filter(movie => movie.category === 'Action');
const horrorMovies = movies.filter(movie => movie.category === 'Horror');

console.log('Horror: ', horrorMovies);
console.log('Action: ', actionMovies);

//!  .forEach()

let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
];
//below will list each iteration in the array
// for(let i = 0; i < newFoodList.length; i++) {
//   console.log(newFoodList[i])
// }

// below will also list each iteration, but with cleaner code
newFoodList.forEach(item => console.log("ForEach:", item));

/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies titles
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/
let movieList = ['Evil Dead', 'Zombie', 'Nightmare', 'Repulsion', 'Don`t Look Now'];
// movieList.forEach(movie => console.log("Movie Title: ", movie));

movieList.push('Tenebrae');
// movieList.forEach(movie => console.log("Movie Title: ", movie));

movieList.splice(1,2,'Don`t Go in the House');
movieList.forEach(movie => console.log("Movie Title: ", movie));

//! .find()

let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character= "Leo"; 
console.log('Find:', tmnt.find( c => c == character));
//returns Find: Leo
character = 'April';
console.log('Find Again:', tmnt.find(c =>c ==character));
//returns Find Again: undefined
character = 'Splinter';
tmnt.find((c,i) => console.log('Index:', c == character, "index: ", i ))

//! .map()
/* 
    - similar to a .forEach(), but creates a new array with the results of calling a provided function on every element in the calling array
    - takes a callback function (cb)
*/

let numArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) numArray.push(i); // gives numArray all the numbers between 0 and 101

numArray.map(x => {
    if(x % 15 === 0) fizzBuzzArray.push(x);
}); // goes through the numArray and finds every number divisible by 15 and pushes them to the vacant fizzBuzzArray

console.log(fizzBuzzArray); // displays all numbers between 0 and 101 that are divisible by 15

/* CHALLENGE
 - First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
       - search something like "arrays", "javascript", "reverse"
       - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];

console.log(typeof arr);// arr = object
console.log(arr);  // [ 1, 2, 3, 4, 5 ]
let newString = arr.reverse();
console.log(newString); // [ 5, 4, 3, 2, 1 ]

let arr2 = [1, 2, 3, 4, 5];
let revArr = ('');

if(arr2 instanceof Array === true) {
    let revArr = arr2.reverse();
    revArr.forEach(num => console.log(num));
} else {
    console.log('not an array');
}
 console.log(revArr);



