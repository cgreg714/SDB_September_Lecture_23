let theSimpsons = {
    id: 1, // usually objects will have a unique identifier for each object to prevent duplicate objects ie. users with the same first and last names
    est: 1989,
    genre: 'Animated',
    seasons: {
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
    characters: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ]
}

const { characters, seasons } = theSimpsons; 
console.log(characters);
characters.push('Meo');
console.log(characters);
console.log(theSimpsons);
characters[5] = 'Moe';
console.log(theSimpsons);

const { currently_running: on_air} = theSimpsons;
console.log(on_air);
console.log(theSimpsons.currently_running);

//! Spread with Objects

const simpsonsCharacters = {
    simpsonHouse: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ],
    moesTavern: [
        'Moe', 'Barney'
    ]
};
const generalLocations = {
    park: 'Jebediah Springfield',
    beach: 'dock',
    lake: 'Blinky the Three-Eyed Fish',
}
const locations = {
    ...simpsonsCharacters,
    dmv: ['Patty', 'Selma'],
    ...generalLocations
}

console.log(locations);
/* returns:

simpsonHouse: [ 'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie' ],
moesTavern: [ 'Moe', 'Barney' ],
dmv: [ 'Patty', 'Selma' ],
park: 'Jebediah Springfield',
beach: 'dock',
lake: 'Blinky the Three-Eyed Fish'

*/
console.log(locations.simpsonHouse[3]);
/* returns:
Lisa 
*/

