const mysql = require('mysql');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || 'mysql-projetsep.alwaysdata.net';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'projetsep';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || 'ProjetSEP-2020';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'projetsep_festival_des_jeux';

// Create the connection with required details
const connexion = mysql.createConnection({
  host, user, password, database,
});

const query = "SELECT * FROM Festival";
 
// make to connection to the database.
connexion.connect(function(err) {
  if (err) throw err;

  // if connection is successful
  connexion.query(query, (err, result, fields) => {
    // if any error while executing above query, throw error
    if (err) throw err;

    // if there is no error, you have the result
    console.log(result);
 });
});

module.exports = connexion