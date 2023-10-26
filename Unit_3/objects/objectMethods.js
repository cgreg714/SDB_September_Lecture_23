let theSimpsons = {
    id: 1, // usually objects will have a unique identifier for each object to prevent duplicate objects ie. users with the same first and last names
    est: 1989,
    genre: 'Animated',
    season: {
        "Season One": [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: '1989-12-17'
            },
            {
                episode_title: "Bart the Genius",
                aired: '1990-01-01'
            },
        ],
        "Season Two": [/* ... */],
        "Season Three": [/* ... */]
    },
    currently_running: true,
}

// *Object.keys() - returns back an array of keys

// console.log(Object.keys(theSimpsons));
// returns [ 'id', 'est', 'genre', 'season', 'currently_running' ]

const listKeys = Object.keys(theSimpsons);
console.log(listKeys);

//* Object.values() - returns an array of values
// console.log(Object.values(theSimpsons));
// console.log(Object.values(theSimpsons.seasons));

//* Object.assign() - copies all enumerable properties from one or more sources.

let objOne = {name: 'Bob'};
let objTwo = {work: 'Manager'};

let newObject = Object.assign(objOne, objTwo);
console.log(newObject);
// returns { name: 'Bob', work: 'Manager' }
console.log(newObject.name);
// returns Bob

let futurama = Object.assign(theSimpsons);
console.log("Futurama: ", futurama);


//* delete object.key - points to a particular key inside an object and removes it
console.log('Before:', Object.keys(futurama));
delete futurama.currently_running;
console.log('After: ', Object.keys(futurama));
/* 
Before: [ 'id', 'est', 'genre', 'season', 'currently_running' ]
After:  [ 'id', 'est', 'genre', 'season' ]
*/

//* Object.freeze() - prevents changes from being made 
Object.freeze(theSimpsons)