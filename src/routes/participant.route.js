/**
 * Router file for the seance object
 * This file contains method for handling
 * GET and POST request for the participant
 */
 const router = require("express").Router();
 const { getParticipantById, addParticipant, getAllParticipant } = require("../service/participant.service");
 
 router
   .get("/participant", async (req, res) => {
     //get all participants 
     res.send(await getAllParticipant());
   })
   .get("/participant/:id", async (req, res) => {
     //get participant by id
     const participant = await getParticipantById(req.params.id);
     res.send(participant);
   })
   .post("/participant", async (req, res) => {
     //post method for adding participant
     const { duration_seconds, device_type, email_address, location_region} = req.body;
     let result = await addParticipant({ duration_seconds, device_type,email_address, location_region });
     res.send(result);
   });
 
 module.exports = { router };