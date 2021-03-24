module.exports = app => {
    const festivalController = require("../controller/festivalController.js")

    var router = require("express").Router();

    router.POST('/', festivalController.createFestival());

    router.GET('/', festivalController.getFestivals());

    app.use('festivals',router);

};