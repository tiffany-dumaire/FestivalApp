const database = require('../database')

async function createFestival(nomFestival,annee,nbTableE1,nbTableE2,nbTableE3,m2E1,m2E2,m2E3,prixE1,prixE2,prixE3){
    try {
        const res = await database.query('INSERT INTO Festival (nomFestival,annee,nbTableE1,nbTableE2,nbTableE3,m2E1,m2E2,m2E3,prixE1,prixE2,prixE3) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',[nomFestival,annee,nbTableE1,nbTableE2,nbTableE3,m2E1,m2E2,m2E3,prixE1,prixE2,prixE3])
    }catch(error){
        throw error
    }
}

module.exports = {createFestival}