let mysql = require("mysql");
let dotenv = require("dotenv");
dotenv.config();

// we retrieve the database configuration inside the .env file
const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

//Connection configuration
const connection = mysql.createConnection({
  host: host,
  port: port,
  database: database,
  user: user,
  password: password,
});

//Etablish the connection with the database
function connect() {
  connection.connect((err) => {
    if (!err) {
      console.log(`Successfully connected to mysql database`);
      return connection;
    }
    console.log(err);
  });
}
//return instance of the current connection
function getConnectionLink() {
  return connection;
}

module.exports = { connect, getConnectionLink };
