const express = require('express');  

const app = express(); 

const PORT = 4000; 

const controller = require('./controllers/routes.controller'); 

const{getTimestamp} = require('./utils/middleware');



app.use(express.json());  // Provides us access to use JSON within our routes
app.use(getTimestamp);

app.use('/routes', controller);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    //Provides us feedback that server is running.
})






