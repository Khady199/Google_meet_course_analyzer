let app = require("express")();
let morgan = require("morgan");
let dotenv = require("dotenv");
let bodyParser = require("body-parser");

//router
let seanceRouter = require("./routes/seance.route").router;
let participantRouter = require("./routes/participant.route").router;
//db link establishment
let db_connector = require("./repository/db.js").connect;
//loads env variables into process.env
dotenv.config();

const PORT = process.env.PORT || 8081;

//express middlewares registration
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(seanceRouter);
app.use(participantRouter);

db_connector();

//start server on PORT
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
