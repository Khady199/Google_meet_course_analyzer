const { getConnectionLink } = require("./db");

//Objet utilisé pour interagir avec la base de données
const db_link = getConnectionLink();

/**
 * Create a new participant
 * @param {duration_seconds, device_type, email_address, location_region}
 * @return Participant
 */
function addParticipant({duration_seconds, device_type, email_address,location_region}) {
  const query = "INSERT INTO Participant(duration_seconds, device_type,email_address, location_region) VALUES(?,?,?)";
  return new Promise((resolve, reject) => {
    db_link.query(query, [duration_seconds, device_type,email_address, location_region], function (err, results) {
      if (err) {
        reject(err);
      }
      resolve({
        
        duration_seconds,
        device_type,
        email_address,
        location_region,
      });
    });
  });
}

/**
 * Return all Participant in the database
 * @returns Participant
 */
function getAllParticipant() {
  const query = "SELECT * FROM Participant";
  return new Promise((resolve, reject) => {
    db_link.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(JSON.stringify(results)));
    });
  });
}
/**
 * Retrieve a Participant given his id
 * @param {int} id
 * @returns Participant || empty array
 */
 function findParticipantById(id) {
    const query = "SELECT * FROM Seance where IdParticipant = ?";
    return new Promise((resolve, reject) => {
      db_link.query(query, [id], (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(JSON.stringify(results)));
      });
    });
  }
  
  module.exports = { addParticipant, getAllParticipant, findParticipantById };
