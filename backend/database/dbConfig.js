/* const mysql= require('mysql');

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
}); */

module.exports = {
  HOST : "mysql-projetsep.alwaysdata.net",
  USER : "projetsep",
  PASSWORD : "ProjetSEP-2020",
  DB : "projetsep_festival_des_jeux",
  dialect : "mysql",
  pool : {
    max : 5,
    min : 0,
    acquire : 30000,
    idle : 10000
  }
};