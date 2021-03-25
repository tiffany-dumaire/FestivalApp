// ---------- Editeur

const router = require('express').Router();
const db = require('../database/dbConfig');

// --------------------------------------------------------------------------------------------------------
// ----------- get request
// --------------------------------------------------------------------------------------------------------



// ----------------------------------------------------
// ---------- get all or some values

// récupération de tous les éditeurs
// societe/editeur/all
router.get('/editeur/all', (req,res,next)=> {
    db.queryValuesOrdered('Societe','editeur',true,'nomSociete',function(result){
        res.send(result);
    });
});

// récupération d'un éditeur particulier
// societe/editeur/all/:id
router.get('/editeur/all/:id',function(req,res,next){
    const id = req.params['id'];  
    db.queryValue('Societe','idSociete',id,function(result){
        res.send(result);
    });
 });

// récupération de tous les exposants
// societe/exposant/all
router.get('/exposant/all', (req,res,next) => {
    db.queryValuesOrdered('Societe','exposant',true,'nomSociete',function(result){
        res.send(result);
    });
});

// récupération d'un exposant particulier
// societe/exposant/all/:id
router.get('/exposant/all/:id',(req,res,next) => {
    const id = req.params['id'];  
    db.queryValue('Societe','idSociete',id,function(result){
        res.send(result);
    });
 });

//création d'un éditeur
//societe/create
router.post('/create',(req,res,next) => {
    db.insertValue('Societe',req.body,function(result){
        res.send(result);
    });
});


//----------------------------------------------
//----------Societé dans un festival------------
//----------------------------------------------

router.get('/festival/Exposant',(req,res,next) => {
    db.queryAllWhereOrdered('Societe','Reservation','idSociete','idSociete',req.body,'nomSociete',function(result){
        res.send(result);
    });
});

module.exports = router