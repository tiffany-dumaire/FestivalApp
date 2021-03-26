// ---------- Festival

const router = require('express').Router();
const db = require('../database/dbConfig');

//---------------- Liste des festivals -------------------------------------------------------------
//----------------(liste affichée seulement au grand manitou) --------------------------------------
//----------------Rappel les organisateurs ne voient que le festival en cours ----------------------

//----------get------------

/**
 * récupération de tous les festivals
 * /festival/all
 */ 
router.get('/all', (req,res,next)=> {
    db.queryAll('Festival',(result) => {
        res.send(result);
    });
});

/**
 * récupération de tous les festivals triés par année décroissante (affichage de l'accueil du grand manitou)
 * /festival/allbyyear
 */
router.get('/allbyyear',(req,res,next) => {
    db.queryAllOrderedDesc('Festival','annee',function(result){
        res.send(result);
    });
});

/**
 * affichage d'un festival par id (dans l'url)
 * /festival/all/{id}
 */
router.get('/all/:id',(req,res,next) => {
   const id = req.params['id'];  
   db.queryValue('Festival','idFestival',id,function(result){
       res.send(result);
   });
});

//----------post------------

/**
 * creation d'un festival
 * /festival/create
 */
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