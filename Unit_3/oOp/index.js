//! Object Oriented Programming

/*  
    - JavaScript has both Functional and Procedural aspects.
        -It's a multi-paradigm language.
    - Core Concepts of OOP:
        - Encapsulated data and behavior through an exposed interface.
        - Allow for inheritance of behavior
        - Abstraction of complexity
        - Polymorphism of behavior
/*  
* Encapsulation
    - set of data within an object
        - properties / methods
*/

    class Pet {
        constructor(name, color) {
            this.name = name; //key:value pair = argument
            this.color = color; //key:value pair = argument
        }
        //this method is still within the class `pet`
        speak() {
            return `${this.name} says, ${this.voice}!`
        }
        fly() {
            if flies= true {
            return `${}`}
            while flies= false {
            return `${}`}
        }
    }
/*
below is outside of the class `pet`, but encapsulation allows us to access the method within the class 
when we called upon the `speak` method on line 31.
 */
//let buttons = new Pet('Buttons', 'brown'); // items in smooth parentheses are the arguments provided to the key:value
//console.log(buttons.speak());

/*  
* Inheritance
    -A child class can gain or inherit properties from a parent class.
*/  

class Dog extends Pet { //we are creating a new class here, but grab everything from the already established `Pet` class

    constructor(name, color, type, sound) {
        super(name, color) //pulls from the already established `Pet` class
        this.type = type;  // this key:value is unique to this class, which is why it is called outside of the `super` command
        this.sound = sound;// this key:value  also is unique to this class, which is why it is called outside of the `super` command
    }

    speak() {
        return `${this.name} the ${this.color} ${this.type} says, ${this.sound}!`
    }
}  

let buttons = new Dog('Buttons', 'brown', 'dog', 'ruff'); // items in smooth parentheses are the arguments provided to the key:value
console.log(buttons.speak());
//output is `Buttons the brown dog says, ruff!`
 class Cat extends Pet {
    constructor(name, color, voice) {
        super(name,color);
        this.voice = voice;
    }
 }

 let mayo = new Cat('Mayo', 'black', 'mew');
 console.log(mayo);

 console.log(mayo.speak()); // this works because `speak` is inherited from the original `pet` class. It would not work if the `speak` method was in the `dog` class.
/* 
* Abstraction
    -Hide complexity via an objects method.
*/

class Tab {
    constructor(sub, tax) {
        this.subtotal = sub;
        this.tax = tax;
        this.tip;
    }

    tipAmount(x) {
        let total = this.subtotal + this.tax;

        this.tip = (total * x);
        let final = total + this.tip;
        return final.toFixed(2);

    }
}

;
let saleTax = 0.075
let tipPercent = .2;

let dinnerBill = new Tab(42.83, saleTax);

function calcTip(bill) {
    return(bill.tipAmount(tipPercent));
}

console.log(`Final Cost: $${calcTip(dinnerBill)}`);
console.log(`With a tip of $${dinnerBill.tip.toFixed(2)}`);

/* 

* Polymorphism
    - How objects respond in relationship from child to parent.
        - ex: same methods
    - "Siblings" cannot respond to each others methods / properties
        *UNLESS shared w/ parent.
    - Perform a single action in different forms
        - when a method is called from a child but that method is within a parent.
    
*/

class A {
    show() {
        console.log(`From A`);
    }
}

class B extends A {}; //accesses the method in A through inheritance

let b = new B();
b.show();

/* 
! CHALLENGE 
    - Create a bird class that extends pets.
    -Provide it a new key property called "flies" that will hold a boolean value.
    -Create a method within the parent class called "fly" that checks to see if 
     our object can fly, and returns as follows:
        If 'true': "{pet} takes to the skies!"
        If 'false': "{pet} can only gaze upward..."

    -Create a new bird. (Give whatever values to its attributes.)
        (HINT: make sure it is true that it can fly.)
    -Within a console.log(), check the fly method of the new bird and another 
     using either the dog or cat that was just created.

 */

     class Bird extends Pet {
        constructor(flies) {
            this.flies = true, false
        }


     }