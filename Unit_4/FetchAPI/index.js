/* 
!   API
    - Application Programming Interface
    - Client(front end) to communicate with a server (database)
    - Allows HTTP requests and response lifecycles
*/

/* 
!   Fetch
    - Before fetch(), we would have to use an httpRequest through items like jQuery/Ajax
    - It is an API
    - It is a method that requires 1 argument (but can accept multiple arguments).
        - The location we are trying to obtain data from (url)
    - Handles the request and response.
    - Returns a promise
        - Allows us access to resolvers (.then() / .catch() / etc.)
*/

const testEndpoint = ' https://jsonplaceholder.typicode.com/posts/1';
//console.log(fetch(testEndpoint));

fetch(testEndpoint)
    //.then(res => console.log(res));
    //.then(res => console.log(res.url)); // returns the URL in the console
    .then(res => console.log(res.body));

/* 
!   JSON
        - Javascript Object Notation
            - very lightweight for storing and transferring data
            - "easy to understand"

* Syntax
    {
        "key":"value",
        "key": true,
        "key": 
    }

    - Everything is wrapped in quotes with some minor exceptions like booleans and integers
    - Data is all separated by a comma
    - CANNOT hold comments or functions
*/
 fetch(testEndpoint)  // provides us a Promise
    .then(res => res.json())  // Turns promise into a JSON
    .then(data=> {
        //console.log(data);  // Allows us to work with object
        displayIt(data.body);
    })

function displayIt(info) {
    const body  = document.querySelector('body');
    const p = document.createElement('p');

    p.textContent = info;

    body.appendChild(p);
}

//* JSON.parse(string);
let myText =  `{"name":"Gollum","lost_ring":true}`;
console.log(myText); // mytext is still a string
let parseJSON = JSON.parse(myText);
console.log(parseJSON.name); // displays 'Gollum'
console.log(JSON.parse(myText));  // JSON turns myText into an manipulable object



const url = `https://meowfacts.herokuapp.com/`
/*
function getCatFacts(){
        fetch(url)
            .then(res => res.json())
            .then (obj => {
                // console.log(obj);
                // console.log(obj.data);
                console.log(obj.data[0]);
                displayIt(obj.data[0]);
            })
}*/

/* 
!   Error Handling
    Keywords:
        - try
        - catch

*   Syntax
    try{
        ...code block to try
    } catch (err){
        ...code block to respond to error
    }
*/
const getCatFacts = async()=> {

    try{
        let response = await fetch(url); // waits for the fetch response to come back
        //let response = fetch(url);
        let results = await response.json();  // stores the response in `results` variable 
        let data = results.data[0]; // data is the final object
        displayIt(data);
    } catch (err) {
        console.error(err); 
    }
    
}

getCatFacts();

//* Local Fetch

fetch('./local.json')
    .then(res => res.json())
    .then(data=> {
        let members = data.fellowship;
        console.log(members);
        for(m of members) {
    displayIt(m.name);
    }   
})
    .catch(err => console.error(err));
