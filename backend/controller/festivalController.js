const festivalModel = require("../model/festivalModel");
const Festival = festivalModel.festival;

exports.createFestival = (req,res) => {
    if(!req.body.nomFestival){
        res.status(400).send({
            message: "Ne peut être vide"
        });
        return;
    }

    const festival = {
        nomFestival: req.body.nomFestival,
        annee: req.body.annee,
        nbTableE1: req.body.nbTableE1,
        nbTableE2:req.body.nbTableE2,
        nbTableE3:req.body.nbTableE3,
        m2E1: req.body.m2E1,
        m2E2: req.body.m2E2,
        m2E3: req.body.m2E3,
        prixE1: req.body.prixE1,
        prixE2: req.body.prixE2,
        prixE3: req.body.prixE3
    }

    Festival.create(festival)
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Erreur lors de la création du festival"
        });
    });
};

exports.getFestivals = (req,res) => {
    const nomFestival = req.query.nomFestival;
    var condition = nomFestival ? {nomFestival : {[Op.like]: `%${nomFestival}%`}} : null;

    Festival.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Erreur lors de la récupération des festivals."
        });
    });
};