//! Objects

let marvelHero = {
    fullName: 'Peter Parker',
    codeName: 'Spider-Man',
    age: 25,
    active: true
}

/* 
*Object Literal
    -when our values are written within our keys.
        -Hard Coded

* Structure

    keyword (let, var, const) objectName = {
        key: value, (separated with commas, and as many as you need/want) (keys are always considered as strings, hence the quotations)

    }
* Objects are dictionaries

*/

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

console.log(theSimpsons.genre); // DOT NOTATION
console.log(theSimpsons['genre']); //square bracket notation //! Requires a string- use for multi-worded values

//console.log(theSimpsons.seasons["Season One"]);
//console.log(theSimpsons.seasons["Season One"][1].episode_title);

theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"]; //adds a list of characters to the object called 'theSimpsons'
console.log(theSimpsons);

theSimpsons.characters.push('Ned Flanders'); // adds stupid sexy Flanders to the list
console.log(theSimpsons);

theSimpsons.currently_running = false; // targets 'currently_running' and changes the value to false
console.log(theSimpsons.characters);
-
theSimpsons.season["Season One"][1].aired = '1990-01-14' // target 'aired', and changes air date
console.log(theSimpsons.season["Season One"][1].aired);

/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an integer
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/
let Hulu = {
    id: 1, 
    Movies: {
        "Films": [ 
        {Title: "Zombie",
        Genre: ["Horror", "Exploitation"],
        Rating: "R",
        Runtime: 91,
        Release_Date: "1979-08-25"},

        {Title: "Blade Runner",
        Genre: ["Science Fiction", "Action"],
        Rating: "R",
        Runtime: 117,
        Release_Date: "1982-06-25"},

        {Title: "The Nightmare Before Christmas",
        Genre: ["Animated", "Musical"],
        Rating: "PG",
        Runtime: "76 minutes",
        Release_Date: "1993-10-29"},

        {Title: "Repulsion",
        Genre: ["Thriller", "Horror"],
        Rating: "R",
        Runtime: "105 minutes",
        Release_Date: "1965-06-10"}

                ]
            },
    Shows: 
        [
            {Title: "Letterkenny",
            Seasons: [
            {season:1,
                epNumber: 6,                
                episodes: [
                {    
                    Title: "Ain't No Reason to Get Excited",
                    Air_Date: "2016-02-07"
                },
                {    
                    Title: "Super Soft Birthday",
                    Air_Date: "2016-02-07"
                },
                {    
                    Title: "The Worst Episode",
                    Air_Date: "2016-02-07"
                },
                {    
                    Title: "Wingman Wayne",
                    Air_Date: "2016-02-07"
                },
                {    
                    Title: "Rave",
                    Air_Date: "2016-02-07"
                },
                {    
                    Title: "A Fuss in the Back Bush",
                    Air_Date: "2016-02-07"
                },
                ],
            },
            
            {season:2,
                epNumber: 6,                
                episodes: [
                    {    
                        Title: "A Fuss at the Ag Hall",
                        Air_Date: "2016-12-25"
                    },
                    {    
                        Title: "The Election",
                        Air_Date: "2016-12-25"
                    },
                    {    
                        Title: "Relationships",
                        Air_Date: "2016-12-25"
                    },
                    {    
                        Title: "The Native Flu",
                        Air_Date: "2016-12-25"
                    },
                    {    
                        Title: "Uncle Eddie's Trust",
                        Air_Date: "2016-12-25"
                    },
                    {    
                        Title: "Finding Stormy a Stud",
                        Air_Date: "2016-12-25"
                    },
                ]
            }

        ]
        }

        ]
    }        


    


console.log(Hulu.Movies.Films);
console.log(Hulu.Shows[0].Title);
console.log(Hulu.Shows[0].Seasons[1].episodes[0].Title);

