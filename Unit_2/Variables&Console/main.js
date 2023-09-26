// Single Line Comment: ctrl + /
/* 
multiline comment: alt+shift+a 
*/

// * Variables

/*
    Variable are named containers for storing data values.

We name the variables so that we can refer to them and the values they hold at a later time.  
Consider that we are naming these variables to help us be directed to a value type.

    We can create a variable thru 3 different keywords:
    1. var
    2. let
    3. const
    4. (none) *NO KEYWORD*

 */

let a = 2;

//  (1)    (2)   (3)    (4)
    let     b     =      1;

/* 
    1. use JS keyword to denote the creation of a variable
    2. the name of the variable, what the developer refers to/calls on to get the stored value
       Variable names should be concise and pertain to the data.
        -should be camelCase. ie. lower case first letter, uppercase next starting letter.
    3. Assignment operator: equal sign, = (always an = for variables)
    4. The initial variable value: it's starting data value.
*/

// * Variable Declaration Vs Initialization

// Declaration: declaring the variable but not assigning it. It's telling the program that something is going to exist, but hasn't been assigned a value yet. 
let x;
console.log("Declaration of x: ", x); // Declaration of x:  undefined ('I know this is a thing, but I don't know what it means'.)

// you can log more than one item, as long as you separate them with a comma
let apple;

// Initialization: where variable is given/set a value.
let y = 4;

let life = 42;

// Reassign a variable value, reassign declared or initialized variables (you can reassign 'let' and 'var', but not 'const'.)
x = 20; 
console.log("Initialization 1", x);

x = 100;
console.log("Initialization 2", x)


apple = 12;


// * Assigning to Other Variables / create variables from variables

let firstName = "Christopher"; // string datatype
let lastName = "Matthews";

let fullName = firstName + " " + lastName;
let fullN = firstName + lastName;

/* 
    * CONSOLE - a tool where we can run and read code

        - A place to see text output / code results. 
        - There is a console object attached to the browser (web).
        - We have a console in VSC to view our results / what is * logged.
        
        .log(), this is the log method of the console, log will print whatever it is passed.
*/

console.log(fullName); // Christopher Matthews

console.log(2+2); // 4

console.log(x);


// Use multiple items/variables in a console.log()

let today = "Great!";
const javaScript = "So much fun!";

console.log(today, javaScript)

today = "Super";
// javaScript = "meh"; //TypeError: Assignment to constant variable.

console.log(today, javaScript)

