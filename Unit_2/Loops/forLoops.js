/* 
    Loops

    - Loops loop through a block of code a number of times.

    - If written incorrectly or are missing syntax, they can lock into an infinite loop.
        !-`CTRL-C` can stop a loop
        !- We will also have a red `x` in place of the play button up top. 
         - Closing the terminal can close it, but not always.

*/
/* 
    ? `For` Loops - for, for in, for of:
        Loops take in 3 parameters(the items within the parentheses of a statement)
            -initial expression (starting value)
            -the condition to be met
            -increment expression (an increase or decrease in value)

    Structure:
        for (initial expression ; condition ; increment expression) {
            ...code to execute/run
        }
*/

// Start at 0 and increase to 10

        for ( i = 0 ; i <=10 ; i ++ ) {
            console.log(i);
        }

        console.log("Finished for loop!")

//Start at 0 and increase by 2 to 20

        for ( i = 0; i <= 20; i +=10 ) {
            console.log(i);
            console.log("You get a 50% off coupon!")
}

//This is a broken loop because it will never get to zero
/* 
for ( i = 0; i <= 20; i -- ) {
    console.log(i);
    console.log("You get a 50% off coupon!")
} */

//Start at 10 and decrease by one until you get to zero

for (i = 10 ; i >= 0 ; i --) {
    console.log(i);
    
}

// If using a Straight Return (one item returning from a statement), we don't need to use curly fries.

for ( i = 5; i >= 0 ; i --)console.log(i);

// Spell out a word letter for letter
let firstName = "Christopher";

console.log(firstName.length);

for ( let i = 0 ; i < firstName.length; i++ ) {
    console.log(i, firstName[i]);
} 
    // console.log(firstName.length); This will give you the length of characters in the string value

//Change the value of a variable with a for loop
let sum = 0;

console.log(`Sum equals ${sum} before the for loop.`)

for (let i = 1; i <= 5; i++) {
    console.log("Before: ", sum);
    sum += i;
    console.log("After:", sum);
}

console.log(`Sum equals ${sum} after the for loop.`) // Sum equals 15 after the for loop.

// ? `For In` Loops: 
/* 
    -Loop through the properties of an object.

    Structure:
    for ( key in object ) {
        ...code to execute/run
    }

    ^key is a random variable name of our choice, similar to "let i=0", object refers to the variable 
    name of the object we are targeting
*/ 

let student = {
    name: "Harry", 
    animal: "owl",
    degree: "magic",
    boyWhoLived: true
}

console.log(student.name); // using dot notation to target the specific item we want to call up
console.log(student["name"]);  // using square bracket notation

for(let item in student) {
    //  ^ you can use whatever for your key variable name, but make it something relevant. You could put `taco` in here, but it wouldn't make sense to someone else.
    console.log(item); //log each key name in the object, ie. name. animal. degree, etc.
    console.log(student[item]); //log each value if each key,  ie. Harry, owl, magic, etc.
}

// Array data is considered an object by JS

let catArray = [
    "Tabby", "Main Coon", "Ragdoll", "Russian Grey"
];

for (cat in catArray){
    console.log(cat); //if this was not here, you would not get numbers displayed with the types
    console.log(catArray[cat]);
}

/* 
    `for in` loops can be used on objects and arrays, but if array index order is important, it's better to use a 
    -`for` loop
    -`for of` loop
    -Array.forEach()
*/


    // ? `For Of` Loops:
/* 
    -Loops through the values of an iterable object
        ? iterable - an object that has items it can count/go through

    Structure:
    for ( variable of iterableData ){
        ...code to execute/run
    }

    ^variable is any word we chose to use, iterableData is the name of any iterable "thing"
        -Can loop over Arrays, Strings, etc.
       !- `for of` loops do not play well with Objects (objects are not iterable).
*/

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba Inu",
    "Golden Retriever"
]
    for (pupper of dogArray) {
        console.log("for of Loop: ", pupper);
    }

for (doggo of dogArray){
    //Use an if conditional to make a separate console.log for Husky
    if (doggo === "Husky"){
        console.log(`I think the ${doggo} is yelling/screaming for his breakfast!`)
    } else if (doggo === "Shiba Inu") {
        console.log(`The ${doggo} is sitting quietly, judging you.`)
    } else{
        console.log(`The ${doggo} is sitting there quietly.`)
    }
}