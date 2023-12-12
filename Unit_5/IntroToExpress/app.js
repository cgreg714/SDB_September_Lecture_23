const express = require('express');  // pulls all dependencies for the project from node_modules. Also a method we can trigger.

const app = express(); //simplifies the method call

const PORT = 4000; //designates which server port will be used within our localhost. using 'ALL CAPS' to designate a general variable.

//* IMPORTS
const practiceController = require('./controllers/practice.controller');
const authController = require('./controllers/auth.controller');
const{logTime} = require('./utils');
const routeController = require('./controllers/route.controller');



//* MIDDLEWARE - middleware is a process that happens before it moves one to something else
app.use(logTime);
app.use(express.urlencoded()) // parses the body from our browser so it can display the response.
app.use(express.json());  // Provides us access to use JSON within our routes
app.use(express.static(`${__dirname}/public`));  // same as saying IntroToExpress/public. the ${__dirname} tag is a variable that pulls whatever the directory is that we are working out of.
//console.log('pathway:', __dirname);

//* CONTROLLER
app.use('/practice', practiceController)
app.use('/todo', authController);
app.use('/routes', routeController)
/* 
    Any traffic coming in that has "practice" after localhost:4000 will route to practice.controller.js
        ex. localhost:4000/practice
*/
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    //Provides us feedback that it is running.
})