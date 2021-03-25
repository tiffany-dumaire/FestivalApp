// ---------- Jeu

const router = require('express').Router();
const db = require('../database/dbConfig');

// --------------------------------------------------------------------------------------------------------
// ----------- get request
// --------------------------------------------------------------------------------------------------------



// ----------------------------------------------------
// ---------- get all or some values

// récupération de tous les jeux
// jeu/all
router.get('/all',(req,res,next) => {
    db.queryAllOrdered('Jeu','nomJeu',function(result){
        res.send(result);
    });
});

//jeu par id : /jeu/all/{id}
router.get('/all/:idJeu',(req,res,next) => {
    const id = req.params['idJeu'];  
    db.queryValue('Jeu','idJeu',id,function(result){
        res.send(result);
    });
 });

 //jeux par festival
 // jeu/allbyfestival
 router.get('/allbyfestival',(req,res,next) => {
    db.queryAllWhere2Ordered('Jeu','JeuReserve','Reservation','idJeu','idJeu','idReservation','idReservation',req.body,'nomJeu',function(result){
        res.send(result);
    });
 });

 //jeux par editeur
 // jeu/allbyeditor
 router.get('/allbyeditor',(req,res,next) => {
    db.queryAllWhere3Ordered('Societe','Jeu','JeuReserve','Reservation','idSociete','idEditeur','idJeu','idJeu','idReservation','idReservation',req.body,'nomSociete',function(result){
        res.send(result);
    });
 });


 
//jeux par zone
 // jeu/allbyzone
 router.get('/allbyzone',(req,res,next) => {
    db.queryAllWhere3Ordered('Jeu','JeuReserve','Zone','ZoneFestival','idJeu','idJeu','idZone','idZone','idZone','idZone',req.body,'nomZone',function(result){
        res.send(result);
    });
 });

//jeux par zone
 // jeu/allbyzone/{id} 
 router.get('/allbyzone/:idZone',(req,res,next) => {
    const id = req.params['idZone'];
    db.queryAllWhere3Ordered('Jeu','JeuReserve','Zone','ZoneFestival','idJeu','idJeu','idZone','idZone','idZone','idZone',req.body,'nomZone',function(result){
        res.send(result);
    });
 }); /////A FINIR

 //creation d'un jeu
 // jeu/create
 router.post('/create',(req,res,next) => {
    db.insertValue('Jeu',req.body,function(result){
        res.send(result);
    });
 });

module.exports = router