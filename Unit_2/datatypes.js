// * Data Types

/* 
    Booleans
    - A boolean has only two values: it can be true or false.

*/

let on = true;
let off  = false;

console.log(on, off);

/* 
    Null
    -Null is an empty value.
    -Think of it like an empty container. Nothing is in it, but the container exists as a space to fill.
*/

let empty = null;

console.log(empty);

/* 
    Undefined
    -no value is assigned, and does NOT act like and empty container.
*/

let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declare the variable.
console.log(undef); // undefined

let correct; // write like this instead
console.log(correct); // undefined

/*
    Numbers
        -Numbers are literally just numbers in JS. 
        No special characters are needed to write them.
*/

let degrees = 98;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's: JS gives you space for 15 9s before it rounds up
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// JS rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // we can still do math with JS, though
console.log(numbersAreHard); // 0.3

// Quick Cool Thing:

let a = Number("42"); // Turns string of numbers into numbers
console.log(a);

/* 
    Strings...how the fuck do they work?
    -datatypes to represent text
    -they are wrapped in single or double quotes, ie. " " /  ' '.
    -Primitive data type = strings, numbers, booleans, null, undefined
      ^the earliest and most basic datatypes.
*/

let stringOne = "double quotes";
const stringTwo = 'single quotes';

console.log(stringOne, stringTwo); // double quotes single quotes

//Numbers vs. Strings

let first = 1234 + 567;
let second = '1234' + '567';
let third = 1234 + "567";

console.log(first) //added number values as expected
console.log(second) // 1234567, one string gets stuck to the other like glue
console.log(third) // same as above

//typeof: can check the datatype of a variable/item
console.log(typeof first);// verifies that 'first' is a number
console.log(typeof second); // verifies that 'second' is a string
console.log(typeof third); // verifies that 'third' is a string

console.log(second[2]); // 3, can access string characters with square bracket 

/* 
    ~~Swimming in the shallow end with Non-Primitive Datatypes~~

    Objects
    - used to store many values instead of a singular one
    - need to be denoted with {curly fries}
    - inside the object we use * key value pairs
        example - key: value
*/

let frodo= {
    race: 'hobbits', // key: value
    altName: 'The Ringbearer', //key:value
    rings: 1, // key: value
    cloak: true // key: value
}

console.log(frodo); // { race: 'hobbits', altName: 'The Ringbearer', rings: 1, cloak: true }
console.log(typeof frodo); // object
console.log(frodo.altName); // The Ringbearer; we used dot notation to access the key's value.

/* 
    Arrays
    -arrays are containers that hold a list or lists of items.
    -with an array, we need to denote with [ ] (square brackets).
    -an array with multiple items will need those items to be separated by commas.
*/

//  (1)    (2)            (3)              
let list = [ 'item1', 'item2', 'item3' ];
/* 
    1. name of the array/list.
    2. array is inside of [ ].
    3. each item, REGARDLESS OF DATATYPE, are comma-separated.
*/

let burritos = ['large', 2, true, ]; //[ 'large', 2, true ]
console.log(burritos);

console.log(typeof burritos); // object (?) 

/*JS defines objects as a container that can 
hold multiple datatypes. */ 

console.log(burritos[0]); // large
console.log(burritos[1]); // 2
console.log(burritos[2]); // true

/* 
    DataType Literals:
    - A literal represents a fixed value that we as developers insert into the code.

    - Literals Include:
        - string literals(character wrapped in quotations)
        - numeric literals (integers)
        - boolean literals (true/false)
        - object literals (key/value pairs)
        - array literals (lists)
*/

// STRING LITERAL
let car = 'Ford';

// NUMERIC LITERAL
let december = 12;

// BOOLEAN LITERAL
let tired = true;
//A value of truth or false

// OBJECT LITERAL
let soups = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
};
// objects hold what are known as key/value pairs. Our soup object has 3 keys (a, b, c), and each of those keys have their own value tied to it

console.log(soup.c); //beef and barley
/*
    - objects use something called dot notation. Dot notation allows us to dig through an object and grab specific data
    - above we are calling our 'soup' variable and using dot notation to grab the key 'c' that's inside our object. Doing so will return the value associated with the key of 'c' (beef and barley)
*/

// ARRAY LITERAL
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

console.log(days.toString()); //Monday, Tuesday, Wednesday, Thursday, Friday
//this is a method that comes built into javascript to help us separate an array into strings

console.log(days.length);
// this is a property of arrays. Properties are things that already belong to an object


/* 
    Special Values (and not the kind you'll find at Kmart)
    -not all math comes out making sense.
        -Infinity
        -NaN (not a number, usually occurs when you do multiplication, thus we have these special values.)
*/

let inf=5/0;
console.log(inf); // Infinity

let notAnumber="string" * 317;
console.log(notAnumber); // NaN

