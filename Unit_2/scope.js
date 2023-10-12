let x = 12;  // established box with content

function scope() {

    let x = 33;
    console.log(x);
}

scope();  //gives you 33 first because it's running this line first
console.log(x);  //gives you the initial value of x

let y = 12;  // established box with content

function scope2() {

    y = 33;
    console.log(y);
}

scope2();  //gives you 33 first because it's running this line first
console.log(y);  // ALSO gives you 33 because it found an y outside of the function, and re-assigned as 33
/* 
global scope encompasses all the lines of code we have
local scope is usually the code located in a set of curly brackets
*/

/* 
    Variable Keywords:
            -const: Cannot be reassigned. Used in circumstances where you need a variable to remain unchanged
            -var: Scoped to nearest function. Can changed/reassigned.
            -let: Scoped to the nearest enclosing block. Can be changed/reassigned.
                ! Code with intent. If you never want to change a variable, use `const`.
*/

//  var
var myVariable = 12;

function varTest(){
    var myVariable = 33;

    if(true) {
    var myVariable = 45;
    console.log(`Var - Within If: ${myVariable}`);
    }
    console.log(`Var - Outside If: ${myVariable}`);
}

varTest();
console.log(`Var - Outside Function: ${myVariable}`);

// let
// TIP: CTRL-D gives you a multi-cursor

let letVariable = 12;

console.log(`Let - Outside If: ${letVariable}`);

function letTest(){
    let letVariable = 33;

    if(true) {
    let letVariable = 45;
    console.log(`Let - Within If: ${letVariable}`);
    }
    console.log(`Let - Outside If: ${letVariable}`);
}

letTest();
console.log(`Let - Outside Function: ${letVariable}`);

//  const
function constTest() {
        const scope = 1;

        if(true) {
            const scope = 2;
            console.log(scope);
        }

        console.log(scope);
    }

    constTest()