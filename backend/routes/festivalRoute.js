const festivalController = require("../controller/festivalController.js")

const router = require("express").Router();

//router.post('/festivals', festivalController.createFestival());

router.get('/festivals',festivalController.getFestivals());

router.get("/festival",(req,res) => {
    res.json({message : "festivals test"});
});


module.exports = router;