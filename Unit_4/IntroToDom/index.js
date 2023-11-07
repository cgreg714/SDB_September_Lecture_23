/* 
!   DOM
    - Document Object Model
    - Only visible through the browser.
    
    Frame:
        - Document: HTML page in the browser
            - "document" - Is a global variable ex. index.html (something available to us, but not something we created)
        - Object: Elements and comments (nodes)
        - Model: the arrangement of everything

    - Data representation of objects that comprise the structure and content of a document on the web.


* BOM
        - Browser Object Model
        - "window" - global variable
        - various methods available
*/  
// console.log('Test');

function askForStuff() {
    prompt();
}

// askForStuff();
console.log(document) //the document must be denoted whenever we want to do something with/to it
console.log(document.URL);
console.log(document.location);  // same as .URL, except it returns an object form.
console.log(document.title);
document.title = "DOM it";

//!  Creating Our First Element
let h1 = document.createElement('h1');
//console.log(h1);

/* 
    Our variable now has access to our various properties.
        - innerHTML: can inject a block of HTML code.
        - innerText: returns the visible text contained in a node.
        - textContent: returns the full text.

        ex:
            <p>Hello <b>World</b></p>
        ~ innerText would return just "Hello"
        ~ textContent would return "Hello World"
*/

h1.innerText = 'Creating my first DOM element!'
console.log(h1);

/* 
*   Chain of Events:
    1. Create the element
    2. Apply the value/properties
    3. Place the element
*/

// console.log(document.body);
document.body.appendChild(h1);
//  1    2     3
    h1.style.color = "blue"; 
    //1-  element targeted
    //2-  inline CSS style tag
    //3-  property being targeted

    h1.style.textAlign = "center";

    let color = 'red';

h1.style = `
    text-shadow: 2px 2px 2px yellow;
    color: ${color};
    text-align: center;
    `;

    h1.className = 'h1-class-name';

    // JS requires camelCasing as "className" instead of class due to it being a keyword, rather than "class" as a function
    h1.id = 'set-id';

    /* 
    ! Finding Elements

    *   HTMLCollection
            - An array-like object
            - Allows access to index, properties, and methods to help navigate and modify
            - Does NOT allow you to modify a group of elements all at once.
            - Can loop through it.
            - Can use .length property to get the size of the list.

        Accessing Multiple Elements requires these methods:
            - getElementsByTagName()
            - querySelectorAll()
            - getElementsByClassName()
    */

let li = document.getElementsByTagName('li');
//console.log(li[0]);
let bathroom = li[0];
bathroom.style.color = 'red';

//li.style.color = 'green'; 
//! above does not work because the code does not read the instances of li as individual elements.

for(i of li) {
    i.style.color = 'green'
}
//! above iterates through the individual instances of li' and changes the color

/* 
*   .querySelector()
        - Grabs first instance of an element or 'null' if nothing is found
        - can target by ID, Class, or Element
            - will need to append # for ID
            -will need to append . for Class
        -ONLY RETURNS FIRST TRUE VALUE

*/

let firstLi = document.querySelector('li');  // element
//console.log(firstLi); --> returns 'clean bathroom

let listTitle = document.querySelector('#listTitle')  // ID
//console.log(toDoList);
listTitle.style.textAlign = 'center'

let toDoList = document.querySelector('#toDoList')
//console.log(toDoList)

let classListItem = document.querySelector('.listItem');  //Class
//console.log(classListItem);

/* 
*   .querySelectorAll()
        - Returns a static nodeList (an array) list of elements.
*/

let nodeListLi = document.querySelectorAll('li');
//console.log(nodeListLi);


let newListItem = document.createElement('li');
let ul = document.getElementById('ulToDo');

newListItem.innerText = "New Item"
ul.append(newListItem);

//ul.appendChild(newListItem);

let liClass = document.getElementsByClassName('listItem')
//console.log(liClass);

//! Event Listeners
/* 
    Allows us to execute a function when an event occurs.

    .addEventListener()
        - considered a DOM node method
        - requires an event to "listen for" or type, and a callback function.

    ex:
    node.addEventListener('click', () => {})

    Adding an item to the list
        Step:
            - Capture the input
            - Access the parent element
            - Assign value to attributes
                - ex. "text from input"
            - Append to parent
*/

let btn = document.getElementById('submit') //targeting the button id in the HTML doc
let input = document.getElementById('listInput'); //referencing the listInput in the HTML
//btn.addEventListener('click', e => {
    //console.log(e);
    console.log('Someone clicked.')
//})

 btn.addEventListener('click', addItem);

 function addItem() {
    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    newItem.style = 'color: blue';

    ul.appendChild(newItem);
 }
