/**
 * This file contains methods used to interact with the database
 * It contains functions related to seance CRUD
 */

const { getConnectionLink } = require("./db");

//Object used to interact with the database
const db_link = getConnectionLink();

/**
 * Create a new seance
 * @param {conference_id,startDate,endDate,hasScreenShared}
 * @return Seance
 */
function addSeance({ conference_id,startDate, endDate, hasScreenShared }) {
  const query = "INSERT INTO Seance(conference_id,DateDebut,DateFin,hasScreenShared) VALUES(?,?,?)";
  return new Promise((resolve, reject) => {
    db_link.query(query, [conference_id, startDate, endDate, hasScreenShared], function (err, results) {
      if (err) {
        reject(err);
      }
      resolve({
        conference_id,
        startDate,
        endDate,
        hasScreenShared,
      });
    });
  });
}

/**
 * Return all seances in the database
 * @returns seances
 */
function getAllSeance() {
  const query = "SELECT * FROM Seance";
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
 * Retrieve a seance given his id
 * @param {int} id
 * @returns seance || empty array
 */
function findSeanceById(id) {
  const query = "SELECT * FROM Seance where IdSeance = ?";
  return new Promise((resolve, reject) => {
    db_link.query(query, [id], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(JSON.stringify(results)));
    });
  });
}

module.exports = { addSeance, getAllSeance, findSeanceById };
