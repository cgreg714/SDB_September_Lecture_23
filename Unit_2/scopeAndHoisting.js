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