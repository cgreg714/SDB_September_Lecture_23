# Getting Started
- Create a `package.json`
    - In the Terminal: `npm init-y` || `npm init`
        -initializes our project.
    -An index of the project.
        - denotes required dependencies to run the project.
- Install our dependencies
    - express: `npm i express`
- Create a `.gitignore` file
    - ALWAYS inject `/node_modules` within .gitignore.
    - tells our local repository to ignore the `node_modules` folder when backing up to GitHub.
        - node_modules folder
            - Provides us access to any "behind the scenes" code that helps run Express and any dependencies installed.
            - When we need to install/reinstall our node_modules, in the terminal we'll type `npm install`.
- package-lock.json
    - locks project into required dependencies. Helps with our versioning.


## CRUD - acronym for...
- Create: POST
- Read: GET
- Update: PUT / PATCH
- Delete: DELETE

## Postman
-Set methods
    - GET| POST | PUT | DELETE depending on our route
    - Body
        - raw
        - JSON
        - Make a JSON object

### Preparing our server to handle JSON objects
- In our `app.js` we need to have this line of code in our **middleware**:
```js
app.use(express.json())
```

- Provides us access to JSON files throughout the routes.

## MVC (Model View Controller)

- Architecture pattern that helps our Separation of Concerns
- View:
    - Browser, Postman, etc.
        - Applications that interface with the server.
- Controller:
    - Part of the server application which handles logic.
- Model:
    - Database schematic

## MIDDLEWARE

- A functions that accesses the request and response
- Has a call stack
    - req (request)
    - res (response)
    - next
