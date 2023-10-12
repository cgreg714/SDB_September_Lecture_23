/* 
    (1)         (2)
    let hi = () => {
        console.log('hi');
    }

    1: We need to set the fat arrow function to a variable.
    2: We use the "fat arrow" to signify it`s a function.

    -arrow functions (or fat arrow functions) were introduced in ES6. They are basically
    just a more concise way to write function expressions - NOT declarations.
        -these DO NOT get hoisted.

*/

//! Concise Body
// these return by default and streamline simple functions

let hi =()=> console.log('Hi !');




//! Block Body
//use for functions with more than one declaration
let hello = () => {
    let greeting = "Hello";
    let moreInfo = "Steve"
    return `${greeting}, ${moreInfo}`;
}

console.log(hello());

let apples1 = (x) => `There are ${x} apples.`;

let apples2 = (x) => {
    return `There are ${x} apples.`;
}

console.log(apples1(1));
console.log(apples2(10));

let apples3 = x => `There are ${x} apples.`; //if declaring one variable, you don't need the parentheses

let apples4 = (x,y) => `There are ${x+y} apples.`; //if declaring two or more variables, you need the parentheses.

/* 

    let hi = () => {
        (1)
        return 'hi':
    }
        (2)         (3)
    let newName = hi();

    console.log(newName);

    1. The keyword that brings our data out of our function.
    2. We need a new variable to hold the value of the return.
    3. When called (invoked), the function becomes the value of the return.
*/

let firstName = fName => 'Steve';
let myName = firstName ();
console.log(myName);

function capitalizeName(name) {
    let capName = '';

    for (l in name) {
        //console.log(l)
        if (l == 0){
            capName += name[l].
            toUpperCase();
        } else {
            capName += name[l].
            toLowerCase();
        }
    }
    return capName;
}

const newName = capitalizeName('erIC');
console.log(newName);

//
/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable (console log)
*/

let bill = 100;


function tipCalc(subTotal) {
    let tip = subTotal * .2;  //does the math for a 20% tip
    let total = subTotal +  tip;  // adds the subtotal to the newly discovered tip
    return total.toFixed(2);  //returns the total to 2 decimal places
    
}
// let total = tipCalc(19.72)
let total = tipCalc(bill);
console.log(total);

// tipCalc(100);