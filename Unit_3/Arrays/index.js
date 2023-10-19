/* 
    Arrays
        - Denoted with square brackets [ ] 
        - Indices starts at zero 0
        - Using a property called "length", we can find the sum of data stored. 
        - Arrays are considered objects in JS
*/

let list = [ 'milk', 'bread', 'chicken', 'coffee' ];
//              0       1       2           3       

console.log(list[2]);
    // targets the second entry in the array
console.log(list.length);
    // lists the sum of the array ie. number of items in the array

list[0] = 'chocolate pie';
    // this is how you can reassign the value of an item in the array
console.log(list);

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', [
        'Tony', 8, true
    ]
];

console.log(typeof avengers);
console.log(avengers instanceof Array);

console.log(avengers[4]);
   //displays the fourth item
console.log(avengers[5][2]);
    //displays the second item in the second array
console.log(`Hello, ${avengers[0]}. Hello, ${avengers[5][0]}`);
    // utilizes string interpolation to display a message using the first of the first array and the first of the second.


//! Array Methods

//! push() - allows you to add an item to the end of an array
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog']

food.push('Pizza');  // does need some argument to push/add to array. Adds to the end of the array.
console.log('PUSH: ', food);
/*  displays...
PUSH:  [
  'Pecan pie',
  'Shrimp',
  'Quesadilla',
  'Cheese cake',
  'Hotdog',
  'pizza'
] */

//! .splice (target position, how many arguments you are removing, replace/add with what)
food.splice(1, 1, 'Tacos');
console.log('SPLICE:', food);
// now displays 'Tacos' where shrimp once was
food.splice(1,0,'Steak');
console.log('SPLICE 2:', food);
// now displays 'Steak' in the first position, but doesn't replace tacos, just bumps it to position 2

//! .pop() - removes argument from the end of an array
food.pop();
console.log('POP:', food)
// now displays the array, minus 'pizza' as the final value

//! .shift() - removes argument from the beginning of an array
food.shift();
console.log('SHIFT:', food);
// removed  'pecan pie'

//! .unshift() - adds an argument or arguments to the beginning of the array
food.unshift('Hamburger', 'Salad');
console.log('UNSHIFT:', food);
// added 'Hamburger' and  'Salad' to the start of the array

// .toString()
let rgb = ['red','green','blue'];
console.log(typeof rgb.toString());
console.log(typeof rgb);






