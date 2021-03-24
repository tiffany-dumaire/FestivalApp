const express = require('express')
//const bodyParser = require('body-parser');
//const cors = require('cors');
const app = express();

var corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 204
};

//app.use(cors(corsOptions));
//app.use(bodyParser.json())npm;
//app.use(bodyParser.urlencoded({extended : true}));

//const database = require('./model');
//database.sequelize.sync();

/*
app.get("/",(req,res) => {
    res.json({message : "Test"});
});
*/

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur connecté sur le port ${PORT}.`);
    console.log("Coucou")
});

//require('./routes')(app);