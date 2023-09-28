/* Conditionals represent decision-making in JS, from the choice that must be made (for example, "one cookie or two"), 
to the resulting outcome of those choices*/

//The most common type of conditional is the *"if...then" statement, coded as *if...else.
//ex.
//      1      2            3
        if (condition) {
            /* code to run if condition is true */
            4       5
        } else {
          /* run some other code instead */
        }

/*  1. keyword 'if' (initiates the conditional)
    2. the condition to test, ie. " 5 > 6 ". This is a conditional operator, and will return a boolean of true or false.
    3. the code that is run if the condition is true
    4. keyword 'else' (basically 'or if this is false, then...)
    5. the code that is run if the condition is false.

    In other words, "if the condition is true, run code A, if it is not, then run code B".
*/

// This 'if...else' condition cn also be coded as...

if (condition) {
    /* code to run if condition is true */
  }
  
  /* run some other code */

/*CAUTION - this will work (not including the 'else' or second set of curly fries), but will run 
the secondary code REGARDLESS of what the secondary conditional returns.

// OR

if (condition) 

/* code to run if condition is true */
else /* run some other code instead */

/* No curly fries will work also, but it's not as organized of a way to code. */

/*  Another type of conditional is 'else...if', which allows additional choices and outcomes.
        -Each extra choice requires an additional block to put in between 'if () { }' and 'else { }'.
        ex. 
 */







