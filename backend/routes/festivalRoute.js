var express = require('express');
var router = express.Router();

const festivalController = require("../controller/festivalController")

router.post('/create', async (req,res,next) => {
    try{
        await festivalController.createFestival(req.body)
        res.status(200).json({message:"Success"})
    }catch(error){
        res.status(500).json({message: "retry"});
    }
});

router.get('/', async (req,res,next) => {
    try {
        const festivals = await festivalController.getFestivals();
        res.status(200).json({message: festivals})
    }catch(error){
        res.status(500).json({message: "data?"})
    }
});

module.exports = router;