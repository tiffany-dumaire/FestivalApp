// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// ---------- Festival
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

const router = require('express').Router();
const db = require('../database/dbConfig');

// --------------------------------------------------------------------------------------------------------
// ----------- get request
// --------------------------------------------------------------------------------------------------------



// ----------------------------------------------------
// ---------- get all or some values

router.get('/festival', (req,res,next)=> {
    db.queryAll('Festivals',(result) => {
        res.send(result);
        console.log(result);
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
/*
router.get('/festival', function(req,res,next){ // get all festival
   // console.log("get all festival");
   db.queryAllOrderedDesc('Festivals','nomFestival,annee',function(result){
       // console.log(result);
       res.send(result);
   });
}); */


// ----------------------------------------------------
// ---------- get one particular value

/* router.get('/festival/:id',function(req,res,next){
   const id = req.params['id'];  
   // console.log(`get festival for id=${id}`);
   db.queryValue('Festivals','idFestival',id,function(result){
       res.send(result);
   });
});
 */

// --------------------------------------------------------------------------------------------------------
// ----------- post request
// --------------------------------------------------------------------------------------------------------



// ----------------------------------------------------
// ---------- create / add a new festival

/* router.post('/festival', function(req,res,next) {
   db.insertValue('Festival', req.body,function(result){
       // console.log(`add editeur ${JSON.stringify(result)}`);
       db.queryAll('Societe',function(resedit){
           // console.log(`all editeurs : ${JSON.stringify(resedit)}`);
           for (editeurDTO of resedit) {
               db.insertallValue('suivi',{idEditeur:editeurDTO.idEditeur,idFestival:result['insertId']},function(resfinal){
               });                        
           }
           db.insertValue('Zone',{idZone:-1,nomZone:"- zone indéfinie",idFestival:result['insertId']},function(newzone){});
       });
       res.status(200).send(result);
   });
}) */

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