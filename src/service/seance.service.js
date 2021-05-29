const seanceReposiroty = require("../repository/seance");

/**
 * Récupérer par son participant Id
 * @param {Seance Id} id
 * @returns Seance or empty array
 */
async function getSeanceById(id) {
  return await seanceReposiroty.findSeanceById(id);
}

/**
 * Create a new seance
 * @param {Seance} seance
 * @returns  created Seance
 */
async function addSeance(seance) {
  const conference_id = seance.conference_id;
  const startDate = new Date(seance.startDate);
  const endDate = new Date(seance.endDate);
  const hasScreenShared = seance.hasScreenShared;

  return await seanceReposiroty.addSeance({ conference_id, startDate, endDate, hasScreenShared });
}

async function getAllSeance() {
  return await seanceReposiroty.getAllSeance();
}

module.exports = { getSeanceById, addSeance, getAllSeance };
