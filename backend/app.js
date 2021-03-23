const express = require('express')
const database = require('./database/dbConfig');
const festivalsRouter = require('./routes/festivalRoute')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({type:'text/html'}));

app.use('/festival', festivalsRouter)

module.exports = app;