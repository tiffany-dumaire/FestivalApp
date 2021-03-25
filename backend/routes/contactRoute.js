// ---------- Jeu

const router = require('express').Router();
const db = require('../database/dbConfig');

// --------------------------------------------------------------------------------------------------------
// ----------- get request
// --------------------------------------------------------------------------------------------------------



// ----------------------------------------------------
// ---------- get all or some values

// récupération de tous les contacts
// contact/all
router.get('/all',(req,res,next) => {
    db.queryAllOrdered('Contact','nom',function(result){
        res.send(result);
    });
});

//contact par id : /contact/all/{id}
router.get('/all/:idContact',(req,res,next) => {
    const id = req.params['idContact'];  
    db.queryValue('Contact','idContact',id,function(result){
        res.send(result);
    });
 });
 
 //creation d'un jeu
 // contact/create
 router.post('/create',(req,res,next) => {
    db.insertValue('Contact',req.body,function(result){
        res.send(result);
    });
 });



module.exports = router