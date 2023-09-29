/* 
    -- * Switch conditional statement
        -a 'switch' statement executes/runs a block of code depending on different cases.
        -the 'case' keyword is used specifically with 'switch'.
        -the 'switch' is used together with a break, a default keyword, or both.
            -These are both optional.
            -Break: keyword that breaks out of the switch block. If a break is omitted/ not
            added, then the next code block in the switch with run (run as well).
            -Default: keyword that specifies code to run id no case matches (think what our 'else' did in 'if' statements).
*/

let officeCharacter = "Pam";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); // String interpolation
}

// We can use backticks `` to create strnigs that can use the value of variables.
//The variable must be surrounded by a ${} (cash money curly fries)

// ex.

//let num = -40 // 'did not work'
//let num = 5; // 'case 2 ran'
//let num = -3; // 'case 1 ran'

switch (true) { //the 'true' value will let your check if something is true or false
    case (num < 0 && num > -10): // is 'num' less than zero, AND greater than -10 ?
        console.log('case 1 ran');
        break;
    case (num > 0): // is 'num' greater than 0?
        console.log('case 2 ran');
        break;
    default: // 'num' doesn`t meet case 1 or case 2
        console.log('did not work');
}

