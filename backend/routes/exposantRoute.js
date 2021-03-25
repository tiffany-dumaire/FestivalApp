// ---------- Exposant

const router = require('express').Router();
const db = require('../database/dbConfig');

// --------------------------------------------------------------------------------------------------------
// ----------- get request
// --------------------------------------------------------------------------------------------------------



// ----------------------------------------------------
// ---------- get all or some values

// récupération de tous les exposants
// exposant/all
router.get('/all', (req,res,next)=> {
    db.queryValuesOrdered('Societe','exposant',true,'nomSociete',function(result){
        res.send(result);
    });
});

module.exports = router