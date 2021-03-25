module.exports = function(app){
    app.use('/festival',require('./festivalRoute'));
    app.use('/societe',require('./societeRoute'));
    app.use('/jeu',require('./jeuRoute'));
    app.use('/zone',require('./zoneRoute'));
    app.use('/contact',require('./contactRoute'));
}