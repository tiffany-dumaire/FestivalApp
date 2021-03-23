const mysql= require('mysql');

// Get the Host from Environment or use default
const host = 'mysql-projetsep.alwaysdata.net';

// Get the User for DB from Environment or use default
const user = 'projetsep';

// Get the Password for DB from Environment or use default
const password = 'ProjetSEP-2020';

// Get the Database from Environment or use default
const database = 'projetsep_festival_des_jeux';

// Create the connection with required details
const connexion = new mysql.createConnection({
  host, user, password, database
});

module.exports = connexion
/* connexion.connect((query,err) => {
  if (err) throw err;

  // if connection is successful
  connexion.query(query, (err, result, fields) => {
    // if any error while executing above query, throw error
    if (err) throw err;

    // if there is no error, you have the result
    console.log(result);
 });
}); */