/* 
! Hoisting
    - JS reads from top to bottom in two different passes.
        -1st pass:
            -Made by the compiler. This is where hoisting is initiated.
            -Compiled for execution.
        2nd pass:
            - Variables are assigned.
            - Executes any hoisted code.    
*/

let names = 'Everly';
console.log(names);

b();

function b() {
    console.log("I have been hoisted!");
}  // still works

c();

let c = () => {
    console.log("Hoisted?")
}  //this will not work because arrow functions cannot be hoisted


let c = () => {
    console.log("Hoisted?")
}
c();  // this will work.

let z=()=>{let test=1;console.log(test)};

if num / 3
/* 
    Write a program that uses a loop, conditionals, and console log to print all the numbers from 1 to 30 inclusive and follows the rules below:

    1. For numbers evenly divisible by by 3, print "Fizz" instead of the number.
    2. For numbers evenly divisible by by 5, print "Buzz" instead of the number.
    3. For numbers that are evenly divisible by both 3 and 5, print "Fizz Buzz" instead of the number, making sure that the program still prints "Fizz" or "Buzz" for numbers divisible by only 3 or 5 and not both.
    4. For any number that is not divisible by by either 3 or 5, print the number itself.
*/
function mathThing () {
for (i=1; i<=30; i++); { // eli gave me this
    if (i === ) { 
console.log('Fizz');
    }

    mathThing();

    }
    else if
    {
something something something;
console.log('Buzz');
    }
something something something;
console.log('Fizz Buzz');
    }

}
    gonna stick with selling vegetables. gonna have to sell a lot to make back 10,000 clams. maybe keep playing the lottery.


    function countNumbers() {
        for (let i = 0; i <= 30; i++) 

            if (i % 3 === 0 && i % 5 === 0) 
                
            {console.log('fizzbuzz');}

            else if (i % 3 === 0 ) 
          
            {console.log('fizz'); }

            else if (i % 5 === 0)
            
            {console.log('buzz')
    }
            
}
      

countNumbers();