module.exports = (sequelize,Sequelize) => {
    const Festival = sequelize.define('Festival',{
        idFestival : {
            type: Sequelize.INTEGER,
            required : true
        },
        nomFestival: {
            type: Sequelize.STRING(50),
            required: true
        },
        annee: {
            type: Sequelize.INTEGER,
            required: true
        },
        nbTableE1: {
            type: Sequelize.FLOAT,
            required: true
        },
        nbTableE2: {
            type: Sequelize.FLOAT,
            required: true
        },
        nbTableE3: {
            type: Sequelize.FLOAT,
            required: true
        },
        m2E1: {
            type: Sequelize.FLOAT,
            required: false
        },
        m2E3: {
            type: Sequelize.FLOAT,
            required: false
        },
        m2E3: {
            type: Sequelize.FLOAT,
            required: false
        },
        prixE1: {
            type: Sequelize.FLOAT,
            required: true
        },
        prixE2: {
            type: Sequelize.FLOAT,
            required: true
        },
        prixE3: {
            type: Sequelize.FLOAT,
            required: true
        }
    });
    return Festival;
};