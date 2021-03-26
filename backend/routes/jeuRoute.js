// ---------- Jeu

const router = require('express').Router();
const db = require('../database/dbConfig');

//---------------- Liste des jeux pour le suivi des exposants ------------------------------------------ 
//----------------(on s'en fout de l'éditeur du coup il faut juste le nom du jeu) ----------------------

//----------get------------

/**
 * a utiliser dans un menu déroulant pour ajouter le jeu dans le suivi exposant seulement
 * récupération de tous les jeux
 * /jeu/all
 */
router.get('/all',(req,res,next) => {
    db.queryAllOrdered('Jeu','nomJeu',function(result){
        res.send(result);
    });
});

// affichage des détails des jeux seulement pour la partie mobile...
//jeu par id : /jeu/all/{id}
router.get('/all/:idJeu',(req,res,next) => {
    const id = req.params['idJeu'];  
    db.queryValue('Jeu','idJeu',id,function(result){
        res.send(result);
    });
});


//---------------- Liste des jeux du festival ------------------------------------------ 

//----------get------------

// il faut donner l'id du festival dans le body !!!
//jeux par festival
// jeu/allbyfestival
router.get('/allbyfestival',(req,res,next) => {
    db.queryAllWhere2Ordered('Jeu','JeuReserve','Reservation','idJeu','idJeu','idReservation','idReservation',req.body,'nomJeu',function(result){
        res.send(result);
    });
});


//---------------- Liste des jeux par éditeur ------------------------------------------

//----------get------------

// il faut donner l'id du festival dans le body !!!
//jeux par editeur
// jeu/allbyeditor
router.get('/allbyeditor',(req,res,next) => {
    db.queryAllWhere3Ordered('Societe','Jeu','JeuReserve','Reservation','idSociete','idEditeur','idJeu','idJeu','idReservation','idReservation',req.body,'nomSociete',function(result){
        res.send(result);
    });
});


//---------------- Liste des jeux par zone ------------------------------------------

//----------get------------

//jeux par zone
 // /jeu/allbyzone
router.get('/allbyzone',(req,res,next) => {
    db.queryAllWhere3Ordered('Jeu','JeuReserve','Zone','ZoneFestival','idJeu','idJeu','idZone','idZone','idZone','idZone',req.body,'nomZone',function(result){
        res.send(result);
    });
});

/**
 * Affichage de la liste des jeux pour une zone donnée
 * /jeu/allbyzone/{id} 
 */
router.get('/allbyzone/:idZone',(req,res,next) => {
    const id = req.params['idZone'];
    db.queryAllWhere3Ordered('Jeu','JeuReserve','Zone','ZoneFestival','idJeu','idJeu','idZone','idZone','idZone','idZone',{"JeuReserve.idZone":id},'nomZone',function(result){
        res.send(result);
    });
}); 


//----------post------------

 /**
  * creation d'un jeu
  * /jeu/create
  */
 router.post('/create',(req,res,next) => {
    db.insertValue('Jeu',req.body,function(result){
        res.send(result);
    });
 });

module.exports = router