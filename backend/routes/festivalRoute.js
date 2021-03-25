// ---------- Festival

const router = require('express').Router();
const db = require('../database/dbConfig');

// ----------- get request

// ---------- get all or some values

// récupération de tous les festivals
// festival/all
router.get('/all', (req,res,next)=> {
    db.queryAll('Festival',(result) => {
        res.send(result);
    });
});

//récupération de tous les festivals triés par année
// /festival/allbyyear
router.get('/allbyyear',(req,res,next) => {
    db.queryAllOrderedDesc('Festival','annee',function(result){
        res.send(result);
    });
});

/* router.get('/festival', function(req,res,next){
   if (!req.query['nomFestival']) next('route');
   else next();
}, function(req,res,next){
   const nomFestival = req.query['nomFestival'];
   // console.log(`search festival starting with: ${annee}`);
   db.queryValueOrderedStartingDesc('Festivals','nomFestival',nomFestival,'nomFestival',function(result){
       res.send(result);
   });
}); */

//festival par id : /festival/all/{id}
router.get('/all/:id',function(req,res,next){
   const id = req.params['id'];  
   db.queryValue('Festival','idFestival',id,function(result){
       res.send(result);
   });
});


// --------------------------------------------------------------------------------------------------------
// ----------- post request
// --------------------------------------------------------------------------------------------------------



// ----------------------------------------------------
// ---------- create / add a new festival

//creation d'un festival
router.post('/create',(req,res,next) => {
    db.insertValue('Festival',req.body,function(result){
        res.send(result);
    });
});

// ----------------------------------------------------
// ---------- modify / update an existing festival
/* 
router.put('/festival',function(req,res,next) {
   const id = req.body.idFestival;
   const year = req.body.anneeFestival;
   // console.log(`update -> id=${id} - year=${year}`);
   db.updateValue('festival', req.body,function(result){
           res.status(200).send(result);
   });
}) */


// ----------------------------------------------------
// ---------- remove / delete an existing festival

/* router.delete('/festival/:id', function(req,res,next) {
   const id = req.params['id'];
   db.deleteValue('festival','idFestival',id, function(result){
       res.status(200).send(result);
   });
});
 */

module.exports = router