module.exports = function(app){
    app.use('/festival',require('./festivalRoute'));
    app.use('/editeur',require('./editeurRoute'));
    app.use('/exposant',require('./exposantRoute'));
    app.use('/jeu',require('./jeuRoute'));
    app.use('/zone',require('./zoneRoute'));
}