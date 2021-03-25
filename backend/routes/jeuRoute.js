// ---------- Jeu

const router = require('express').Router();
const db = require('../database/dbConfig');

// --------------------------------------------------------------------------------------------------------
// ----------- get request
// --------------------------------------------------------------------------------------------------------



// ----------------------------------------------------
// ---------- get all or some values

// récupération de tous les jeux
// jeux/all
router.get('/all',(req,res,next) => {
    db.queryAllOrdered('Jeu','nomJeu',function(result){
        res.send(result);
    });
});

//jeu par id : /jeu/{id}
router.get('/:idJeu',function(req,res,next){
    const id = req.params['idJeu'];  
    db.queryValue('Jeu','idJeu',id,function(result){
        res.send(result);
    });
 });
 

module.exports = router