module.exports = function(app){
    app.use('/contact',require('./contactRoute'));
    app.use('/festival',require('./festivalRoute'));
    app.use('/jeu',require('./jeuRoute'));
    app.use('/societe',require('./societeRoute'));
    app.use('/zone',require('./zoneRoute'));  
}