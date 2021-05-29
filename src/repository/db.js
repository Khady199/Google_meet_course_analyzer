let mysql = require("mysql");
let dotenv = require("dotenv");
dotenv.config();

// Nous récupérons la configuration de la base de données dans le fichier .env.
const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

//configuration de la connexion
const connection = mysql.createConnection({
  host: host,
  port: port,
  database: database,
  user: user,
  password: password,
});

//Etablir la connexion avec la base de données
function connect() {
  connection.connect((err) => {
    if (!err) {
      console.log(`Successfully connected to mysql database`);
      return connection;
    }
    console.log(err);
  });
}
//retourne l'instance de la connexion actuelle
function getConnectionLink() {
  return connection;
}

module.exports = { connect, getConnectionLink };
