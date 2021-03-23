var express = require('express');
const { router } = require('../app');
var route = express.Router();

const festivalController = require("../controller/festivalController")

router.post('/', async (req,res) => {
    try{
        await festivalController.createFestival(req.body)
        res.status(200).json({message:"Success"})
    }catch(error){
        res.status(500).json({message: retry});
    }
});

module.exports = route;