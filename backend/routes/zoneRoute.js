// ---------- Zone

const router = require('express').Router();
const db = require('../database/dbConfig');

// ----------- get request

// ---------- get all or some values

// récupération de tous les zones
// zone/all
router.get('/all', (req,res,next)=> {
    db.queryAllOrdered('Zone','nomZone',function(result){
        res.send(result);
    });
});

router.post('/create',(req,res,next) => {
    db.insertValue('Zone',req.body,function(result){
        res.send(result);
    });
});

module.exports = router