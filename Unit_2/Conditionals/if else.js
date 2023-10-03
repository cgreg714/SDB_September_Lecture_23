/* 
    CONDITIONALS
    - It is a way for us (as devs) to ask a question and provide a response depending
    on the condition of what we are asking.
    - Devs == Inventors: we design and ask the question, but also determine the answer 
    options. You have to create your own thought process, then make the program do it.
    - Conditionals focus on a thing being true or being false.
    - Evaluates an expression and responds if it is true.
    - Falsy
            - false
            - 0
            - empty strings
            - null
            - undefined
            - NaN (not a number)
*/

//IF CONDITIONAL STATEMENTS

let isOn= true;

if (isOn == true) {
   console.log('The light is on in the room!'); // The light is on in the room!
}

/* 
    Structure:
    if(condition evaluated) {
        code that runs if expression is true
    }
*/

if (isOn){
    console.log('The light is on, heck yeah!')
}

//This will work if you have established that your condition is true.

let isOff = false;

if(isOff == false) {
    console.log('The light is off...')
}

let weather = 68;

if (weather < 70) {
    console.log('Some might need to grab a jacket.')
}

//IF ELSE Conditional Statement

let temp = 75;

if (temp < 70) {
    console.log('I will grab a sweater.')
} else  {
    console.log('Oh boy, it`s shorts weather!')
}

// AND && - checks to see if both are equal 

let username = 'myUserName';
let password = '1234';

if ( username == 'myUserName' && password == '1235') {
    console.log('Welcome user, myUserName! You are logged in!')
} else {
    console.log('Login error, get to steppin`, foo!')
}

// OR || - checks if one statement is true or the other

let email = '';
let uName = 'coolCat100';

if ( email == 'myemail@email.com' || uName == 'coolCat100') {
    console.log('Welcome to the Jungle, baby, you`re gonna dieeeeeeeee!')
} else {
    console.log('Login info was incorrect. Go pound sand, ya dingus.')
}

// NOT ! 

//let rain = true; // Nothing in the console.
let rain = false; // 
if (!rain) {
    console.log('It is a nice sunny day!')
}

//This is the same as...
if (rain !=true) {
    console.log('It is a nice sunny day!')
}

// Else If - allows for more than two conditions / choices
//Once one of the conditions is met (results in true), it will exit the statement/code block.
// ex.

// let grade = 92; // 'This grade is passing. Great Job!
// let grade = 70; // 'Not quite passing. Reach out to your instructor.'
// let grade = 50; // 'Your parents are wasting their money.'
let grade= 70
if (grade >= 75) {
    console.log('This grade is passing. Great Job!')
} else if (grade >= 69) {
    console.log('Not quite passing. Reach out to your instructor.')
} else {
    console.log('Your parents are wasting their money.')
}
