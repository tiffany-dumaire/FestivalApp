const festivalController = require("../controller/festivalController.js")

const router = require("express").Router();

router.post('/festivals', festivalController.createFestival());

router.get('/festivals',festivalController.getFestivals());

module.exports = router;