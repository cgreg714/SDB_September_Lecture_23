/* 
    ? While Loops

    - While loop, loops through a block of code WHILE a specific condition is true.

    Structure:
    while (condition) {
        ...code to run/execute
    }

        -The main purpose for 'while' loops are when the iteration is uncertain.
            -aka we don't know how much content is in the data we are referencing/looping through.
*/

let n = 1;

while ( n < 10 ) {
    console.log(`n before addition, start of loop: ${n}`); // string interpolation
    n++; // n = n + 1
    console.log(`n after addition, end of loop: ${n}`);
    console.log("-----------------");
}

console.log(`While loop is finished running, final value: ${n}`);

// Output of above code
/* 
n before addition, start of loop: 1 <--- n starting value. this is less than 10, so 1 is added.
n after addition, end of loop: 2   <--- n received the addition of 1, resulting in 2, which is still less than 10. process repeats until line 53
-----------------
n before addition, start of loop: 2
n after addition, end of loop: 3
-----------------
n before addition, start of loop: 3
n after addition, end of loop: 4
-----------------
n before addition, start of loop: 4
n after addition, end of loop: 5
-----------------
n before addition, start of loop: 5
n after addition, end of loop: 6
-----------------
n before addition, start of loop: 6
n after addition, end of loop: 7
-----------------
n before addition, start of loop: 7
n after addition, end of loop: 8
-----------------
n before addition, start of loop: 8
n after addition, end of loop: 9
-----------------
n before addition, start of loop: 9
n after addition, end of loop: 10  <---n value is now 10, so code stops running
-----------------
While loop is finished running, final value: 10
*/

// ? Use a while loop to create and log a string using a pretend online cart

let cartMsg = '';
let z = 0; // cart is empty

while ( z < 5 ) {
    z++;
    cartMsg = `You have ${z} item(s) in your cart!`;
    console.log(cartMsg);
}

console.log(`You have ${z} items in your cart. Would you like to checkout now?`);

/* 
You have 1 item(s) in your cart!    <---1 is less than five, so the code cycles again
You have 2 item(s) in your cart!    <---2 is less than five, so the code cycles again
You have 3 item(s) in your cart!
You have 4 item(s) in your cart!
You have 5 item(s) in your cart!
You have 5 items in your cart. Would you like to checkout now?
 */

// ? Create a Spider-Man storyline with a 'while' loop and an array!

let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
  ];
  let structure = city[0]; // the 0 indicates the beginning of the array
  //console.log(structure); //building
  let pos = 0 //telling the code to start with the first item in the array
  
  console.log ("Welcome to the adventures of the Spectacular Spider-Man. Looks like the Green Goblin is on the loose!");

  while ( structure !="empty street") {
    console.log(`Spider-Man swings from the ${structure} in pursuit of the Green Goblin!`);
    pos++;
    structure = city[pos];
    console.log(`Spider-Man lands on the ${structure}.`);
    console.log('----------------')
  }
console.log(`Spidey finally caught up to the Green Goblin on the ${structure}! The Goblin is cornered, and his evil plans foiled!`);

/* 
  ? 'Do While' Loops
  -Also loop through a block of code while a specified condition is true, BUT...
    ! the loop will run the code block ONCE, BEFORE checking if the condition is true, and will keep running as long as the condition stays true.

        Structure:
        do {
            ...code to run/execute
        } while (condition)

    - Works just like 'while' loops with the exception that it will run the code block at least once.

*/

let num = 5;

do {
    console.log(`The number is ${num}.`);
    num++;
} while ( num < 10)

console.log(`The final number after 'do while' ran is ${num}.`);

// The 'do' code block will run once, EVEN IF the condition is untrue.

let value=20;

do {
    value *=2; // take original value and multiplies by 2
    console.log("Do code block is running...")
} while ( value > 100 );

console.log(value);

// Mock switch a group of accounts from inactive to active, use a boolean

// Step one - Declare and initialize an object called accounts
let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
};

// Step 2 - Use square bracket notation with the object's property ket to get the boolean value
// We want a variable that starts at 1 because of account names (acct1, etc.) that we can increment.

let acctNum = 1;
// console.log(accounts[`acct${acctNum}`]);

do {
    // Create a log message to prove the account is currently inactive
    console.log(`acct${acctNum} is currently inactive: set to ${accounts[`acct${acctNum}`]}.`
    );
    // Set an activating message and set account to 'true'.
    console.log('Activating.....');
    accounts[`acct${acctNum}`] = true;

    // Send a confimation message ALWAYS INCLUDE A CONFIRMATION MESSAGE WHEN CHANGING STATUS
    console.log(`acct${acctNum} is currently active: set to ${accounts[`acct${acctNum}`]}.`
    );
    //After account is activated (true), add 1 to account number variable to move to next account.
    acctNum++;
} while (accounts[`acct${acctNum}`] == false); //if the next value is 'false' it will change to 'true' and continue to run

//Process complete message
console.log("All accounts are now active.");
console.table(accounts); // used .table() method instead of .log()


