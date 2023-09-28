/*! Operators
    These are what help us manipulate our data so that we can update, increase, separate, or simply change it all together.
    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional

    Expressions & Statement

    ex.
    keyword name (expression) {
        code block that runs
    }

*/

/*
    Comparison Operators
    - JS is helpful and does something called "coercion" when comparing values 
        -Coercion is the process of converting a value from one type to another.

*/

// Equal To, ==
// JS assumed we wanted to check if 3 equaled 3. This is how to check values.

console.log("3" == 3); //True, only checking values

// Strict Equal To, ===
// Checks if the two values AND the two datatypes are equal.
// Equal value and of the  same datatype.

console.log("3" === 3); // false, because it is checking both the value AND the datatype
console.log(3 == 3); // true

// Not Equal To, != (only checking values)

console.log("3" != 3); // false
console.log("3" != 4); // true

// Strict Not Equal To, !== (checking both datatype AND values)

console.log(3 !== 3); // false because 3 and 3 are equal
console.log("3" !== 4); // true, because they are different datatypes

// Greater Than
3 > 2; //true

// Less Than
2 < 3; //true

// Greater Than or Equal To, >=
// ! 'The Greater Than' operator must be used BEFORE the equal sign in order to execute correctly

console.log( 18 >= 3 );// true
console.log( 7 >= 7 );//true
console.log(4 >= 7);// false

// Less Than or Equal To, <=
// ! The 'Less Than' operator must be used BEFORE the equal sign.

console.log( 18 <= 3 );// false
console.log( 7 <= 7 );//true
console.log(4 <= 7);// false

// And, && (evaluates from left to right, returns the first falsy value or the last value if none were found.)
console.log(2 && 3); // 3

// And/Or, || (check if this number is equal to this amount or that amount. Returns the first truthy value)
console.log(2 || 3);
console.log(0 || 0 || 2|| 4);// 2

// Not, ! (converts the operand to a boolean [true/false] value and returns the inverse value.)
console.log( !true ); // false
console.log( !0 ); // true



/* 
    Logical Operators
    - Arithmatic operators
*/

//Addition Operator, +=
let r=4;
console.log(r += 1); // r = r + 1 answer is 5
console.log(r); // 5

//Subtraction Operator, -=
let n=4
console.log(n -= 3); // 1
console.log(n); // 1

//Multiplication Operator, *=
let m=2;
console.log(m *= 2); // 4
console.log(m); // 4

//Division Operator, /=
let q=4;
console.log(q /= 2); // 2
console.log(q); // 2

//Remainder Operator / Modulus Operator, %=
let t=7;
console.log(t %= 2); // 1
console.log(t); // 1

//Exponential Operator, **=
let y=2;
console.log(y **= 2); //4  = 2 to the second power
console.log(y); //4
