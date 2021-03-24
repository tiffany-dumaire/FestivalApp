const festival = require("../model/festivalModel")

exports.create = (req,res) => {
    if(!req.body.nomFestival){
        res.status(400).send({
            message: "Ne peut être vide"
        });
        return;
    }
};