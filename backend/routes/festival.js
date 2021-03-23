var express = require('express');
var route = express.Router();

const festivalController = require("../controller/festivalController")

route.post('/', async (req,res) => {
    try{
        await festivalController.createFestival(req.body)
        res.status(200).json({message:"Success"})
    }catch(error){
        res.status(500).json({message: retry});
    }
});

route.get('/', async (req,res) => {
    try {
        const festivals = await Festival.find();
        console.log(festivals);
        res.json(festivals);
    }catch(error){
        res.json({message: error})
    }
});

module.exports = route;