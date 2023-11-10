/* 
! Async/Await
    - Introduced in ES8 in 2017
    - Can make any function an async function simply by denoting it as such with keyword 'async'.
    *   Keywords
        - async
            - denotes a function
        - await
            - calls a process to "wait" for a result
    - Can help us reduce the need for callback functions
    - Cannot be used in a loop
    - ALWAYS returns a promise
*/

// Some Syntax
async function asyncFuncDeclaration (){
    // code block..
}

let FuncExpression = async function(){
    // code block...
}

let arrowFunc = async() => {
    // code block...
}

async function getName(){
    return "gandalf";
}

getName().then(data => console.log(data));

//! Await - Tells JS that a promise is being returned and to wait on that result.

async function extraData() {
    let info = await returnData(); // tells the code we are not advancing to the next line until the returnData promise is fulfilled
    return(`${info} in some cloud...`);
}

extraData().then(data => console.log(data))
