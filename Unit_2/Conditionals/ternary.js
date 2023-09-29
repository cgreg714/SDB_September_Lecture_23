/* 
    ~~~ Ternary Conditional Statement ~~~
    - Super cool syntax. 
    - Uses symbols as a shortcut to write an if, if/else or else/if statement.
    - (condition) ? true result : false result;
    - Ternaries REQUIRE the default/else cast all; has to have both true and false 
      results for condition.    
*/

let num =6; // Yes!
let num = -1; // Nope/Nada!
//Ternary:

(num > 0) ? console.log('Yes!') : console.log('Nope!');

// Instead of:
if (num > 0) {
    console.log('Yes!')
} else {
    console.log('Nada!')
}

//Ternary with two conditions vs Else/If Statement

//let x = 1; // result in all goodbyes
//let x = -5; // result in all hi`s
let x = 0; // results in all hello`s

//else/if statement
if (x == 0) { //if x is equal to 0
    console.log("hello");
} else if (x < 0) { //if x is less than zero
    console.log("hi");
} else { // if x is greater than zero/ meets neither of the prior conditions
    console.log("goodbye");
}

//Ternary Statement

(x == 0) ? //give me a true or false case
console.log('Hello!') : (x < 0) ? console.log('Hi!') : console.log('Goodbye!');

//OR OTHER WAY TO WRITE TERNARY

(x == 0) ?
console.log('Hello! V2') 
    : (x < 0) ? console.log('Hi! V2') 
        : console.log('Goodbye! V2');

