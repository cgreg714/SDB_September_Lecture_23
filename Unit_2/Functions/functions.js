
/*
 ! Functions are essentially small programs that perform a specific task. We use them to help us do things that would need to be repeated.
-They are built to replace repeated code, and perform a specific task when invoked.
*/

/*
! Function Declaration
    (1)       (2)
    function hi() {

        console.log('Hi');
    }

        1: Keyword
        2: Name of the function
                -the parenthesis is for a parameter
*/

function hi() {
    console.log('hi');
}

// ! console.log is used to track information/check values, NOT run code

/* 
! Function Expressions

    let hey = function hi() {
                console.log('Hi');

    }
    1. The variable 'hey' is now representative of the function 'hi'

    *Does NOT get hoisted.
*/
//(1)      (2)
let hey = function hello() {
//  (3)
    console.log('Hi again')
} 

hey();
/* 
    1- declaring a variable
    2- what function is inside the variable
    3- the actual program that the function runs when it is invoked
*/
/* 
    function hi(){
        console.log('hi');
    }

    (1)
    hi();

    1:This is how we call, or 'invoke' our function.
*/  

function greetings() {
    console.log('Hello');
}
greetings; // displays nothing
greetings();  //displays hello
console.log(greetings); //displays  the name of the function

// Create a function that, when invoked, lists out the numbers 1-10. Name our function "counting".
function counting() {
    for(x=1; x <=10; x++){
        console.log(x)
    }
}

counting();

//Given an array , create a function that lists out the words

let arr = ['This', 'is', 'really', 'cool'];
    
let arrList = function arrList() {
    for (item of arr) { //provides numerical index
        console.log(item);
        
    }
    }

    arrList();

    let dogArray = [
        "Husky",
        "Shih Tzu",
        "Corgi",
        "Catahoula",
        "Shiba Inu",
        "Golden Retriever"
    ]

    // console.log(dogArray[0])
    
    function callDogs() {
        for (dog in dogArray) {//provides indexed position
            console.log(dogArray[dog]);
            console.log(`${dogArray[dog]} is in spot ${dog}`);
        
        }
    }
    callDogs();

    let num1
    let num2
    let newNum

    function addTwoNumbers(one, two) {
        let sum = one + two;
        console.log(sum);
    }

    num1= 1;
    num2 = 2;
    newNum= 5;

    addTwoNumbers(num1, num2);
    addTwoNumbers(num1, newNum);