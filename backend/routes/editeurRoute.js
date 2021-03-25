// ---------- Editeur

const router = require('express').Router();
const db = require('../database/dbConfig');

// --------------------------------------------------------------------------------------------------------
// ----------- get request
// --------------------------------------------------------------------------------------------------------



// ----------------------------------------------------
// ---------- get all or some values

// récupération de tous les éditeurs
// editeur/all
router.get('/all', (req,res,next)=> {
    db.queryValuesOrdered('Societe','editeur',true,'nomSociete',function(result){
        res.send(result);
    });
});

module.exports = router