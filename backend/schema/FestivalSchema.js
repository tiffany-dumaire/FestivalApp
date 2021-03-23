const mysql = require('sequelize');

const FestivalSchema = mysql.Schema({
    nomFestival: {
        type: String,
        required: true
    },
    annee: {
        type: Number,
        required: true
    },
    nbTableE1: {
        type: Number,
        required: true
    },
    nbTableE2: {
        type: Number,
        required: true
    },
    nbTableE3: {
        type: Number,
        required: true
    },
    m2E1: {
        type: Number,
        required: false
    },
    m2E3: {
        type: Number,
        required: false
    },
    m2E3: {
        type: Number,
        required: false
    },
    prixE1: {
        type: Number,
        required: true
    },
    prixE2: {
        type: Number,
        required: true
    },
    prixE3: {
        type: Number,
        required: true
    }
});