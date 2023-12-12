const router = require('express').Router();
const db = require('../data.json');

const errorHandling = (res, err) => {
    return res.status(500).json({
        error:err.message
    })
}
//* Get ALL

router.get('/', (req,res) => {
    try {

        res.status(200).json({
            results: db,
            timestamp: req.timeStamp
        })
        console.log(db);
    } catch (err){
        errorHandling(res, err)
    }
})

//* Get one by ID

router.get('/findID/:id', (req,res) => {
    //console.log(req.params)
    try {
let { id } = req.params;
let results = db.filter(i => i.id == id);
    //console.log(results);
    if(results.length !== 0){
    res.status(200).json({
        results: results[0],
        timestamp: req.timeStamp
    }) 
    } else {
        throw new Error('ID not found')
    }
    } catch (err) {
        errorHandling(res, err)
    }
})

//* Get one by title (using query)

router.get('/query/', (req,res) => {
    //console.log(req.params)
    try {
const { title } = req.query;
let results = db.filter(i => i.title.toLowerCase() == title.toLowerCase())

if(results.length > 0) {
res.status(200).json({
        results: results[0],
            timestamp : req.timeStamp
        })
          
    

} else {
    throw new Error("Title not found.");
}
} catch (err) {
        errorHandling(res, err);
    }
})

//* POST - Accept a JSON that includes **title** and **author**.

router.post('/titleAuthor', (req,res) => {

    try {
        const { title, author } = req.body;
        
        res.status(200).json({
            results: {
            title: title,
            author: author,
            timestamp: req.timeStamp
            }
        });
    
} catch (err) {
        errorHandling(res, err);
    }
})

//* Best get to steppin'....Johnny Law's A' Comin'
router.get('*', (req,res) => {
    try {
        res.status(200).json({
            results: "wild card"
        })
    } catch (err) {
        errorHandling(res, err);
    }
}) 

module.exports = router;