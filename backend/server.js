// ----------- express init
const express = require('express');
const app = express();


// ----------- cors : accept request from another domain
const cors = require('cors')

var corsOptions = { // entries can come only from....
    origin: "http://localhost:4200",
    optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};

// ----------------------------------------------------

const port = 3000;
app.listen(port, () => { 
    console.log(`Serveur à l'écoute sur le port ${port} !`); 
});
 
// ----------------------------------------------------

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', function (req, res) {
    res.send('hello world');
});

// ----------------------------------------------------

require('./routes')(app);

// ----------------------------------------------------

// connection.end();