//! Array Destructuring
/* 
    - Syntax is on the left side of the assignment operator.
    - Great for pulling info out of an array and assigning data to its own variable.
*/

const fullName = ['Jane', 'Doe'];

const fName = fullName[0]; //calls upon the first string in the array
const lName = fullName[1]; //calls upon the second string in the array

const [firstName, lastName] = fullName; // Created two new variables based off the array, rather than separate declarations. 
                                        // Lines 8 and 9 are no longer needed in this case.

console.log(firstName, lastName); // Displays "Jane Doe"

console.group(`Hello, Mrs. ${lastName}`); // Displays "Hello, Mrs. Doe"

//! Spread
/* 
    - Denoted by three consecutive periods: ...
    - Pulls out all the elements of an array and gives them to you as a standalone list of elements
* Concept of the spread operator - NOT syntax

const fullName = [ 'Rocket', 'Raccoon'];

...fullName // 'Rocket', 'Raccoon'

const elements = ...fullName;
*/

const copiedFullName = [...fullName];
console.log(copiedFullName);

fullName.push('Mrs.');
// console.log(fullName, copiedFullName);

// console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices));  //returns NaN, but if you give the spread assignment...
console.log(Math.min(...prices)); // returns 3.99

//! Rest
const fullName2 = [
    'Jane', 'Doe', 'Mrs.', {month: 3, date: 22, year: 1973}
];

const [fName, lName, ...otherInfo ] = fullName2; // '...otherInfo' creates an array of the remaining data, no matter what is contained in the original array
//const [fName, lName,, ...otherInfo ] = fullName2; addition of commas will target the next items in the array and skip them
console.log(fName);
console.log(lName);
console.log(otherInfo);

/* 

*/