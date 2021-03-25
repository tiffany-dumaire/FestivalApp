const router = require('express').Router();
const db = require('../database/dbConfig');

router.post('/', async function(req, res, next) {
    try {
        const reponse = await controller.login(req.body)
        res.status(200).json(reponse)
    }
    catch (e) {
        res.status(401).json({ message: "Une erreur est survenue" });
    }
});

module.exports = router;