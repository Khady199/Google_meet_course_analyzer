const seanceReposiroty = require("../repository/participant");

/**
 * Retrieve  by his Id participant
 * @param {Participant Id} id
 * @returns Participant or empty array
 */
async function getParticipantById(id) {
  return await participantReposiroty.findParticipantById(id);
}

/**
 * Create a new participant
 * @param {Participant} participant
 * @returns  created Participant
 */
async function addParticipant(participant) {
 
  const duration_seconds = participant.duration_seconds;
  const device_type = participant.device_type;
  const email_address = participant.email_address;
  const location_region = participant.location_region;
  return await participantRepository.addParticipant({ duration_seconds, device_type,email_address,location_region });
}

async function getAllParticipant() {
  return await participantRepository.getAllParticipant();
}

module.exports = { getParticipantById, addParticipant, getAllParticipant };