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