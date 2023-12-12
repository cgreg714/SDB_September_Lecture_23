const router = require('express').Router();
const db = require('../db.json');

// TODO Get ALL

router.get('/', (req,res) => { //indicates a non-route, but the '/' is required
    try {

        res.status(200).json({
            results: db
        })

    } catch (err) {
        res.status(500).json({
            error:err.message
        })
    }
})

//TODO Get One

/* 
    Syntax:
        URL = /:id
            - denotes a parameter value.Endpoint is expecting a reference value.
        
        example URL with a parameter:
            http://localhost:4000/routes/1

        - "1" would reference a parameter ot flexible string.
            - This could be the name of something or anything that we want.
*/
router.get('/find-one/:id', (req,res) => {
    console.log(req.params);

    /* 
        - used to help us locate one item in our database
        - ID typically has a unique value to help us find that ONE item.
        - Can help us search several times.
    */
   try {

        let { id } = req.params; //deconstructing
        let results = db.filter(i => i.id == id);

        console.log(results);
        res.status(200).json({
        results: results[0]
})

} catch (err) {
    res.status(500).json({
        error:err.message
    })
}
})





//* Query

router.get('/query/', (req,res) => {

        /*
            -Anything after the endpoint can be extracted.
            ex:
                localhost:4000/routes/query/?firstName="john"
        */

    try{
        //console.log(req.query.firstName);
        const {firstName, lastName} = req.query
        //multiple query: localhost:4000/query/?firstName=John&lastName=Doe
        if(firstName && lastName) {
            console.log(firstName, lastName)
        res.status(200).json({
            results: {
                first: firstName,
                last: lastName,
                fullName: `${firstName} ${lastName}`,
            }
        })
    } else {
        throw new Error("Needs to supply First and Last names.");
    }
    } catch (err) {
        res.status(500).json({
            error:err.message
        })
    }
})








router.get('*', (req,res) => {
    try {
        res.status(200).json({
            results: "wild card"
        })
    } catch (err) {
        res.status(500).json({
            error:err.message
        })
    }
}) 

module.exports = router;