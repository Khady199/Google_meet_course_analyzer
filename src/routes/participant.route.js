/**
 *Router file for the session object
 * This file contains a method for handling
 * GET and POST requests for the participant
 */
 const router = require("express").Router();
 const { getParticipantById, addParticipant, getAllParticipant } = require("../service/participant.service");
 
 router
   .get("/participant", async (req, res) => {
     //obtenir tous les participants (get all participants) 
     res.send(await getAllParticipant());
   })
   .get("/participant/:id", async (req, res) => {
     //obtenir un participant par identifiant( get participant by id)
     const participant = await getParticipantById(req.params.id);
     res.send(participant);
   })
   .post("/participant", async (req, res) => {
     //méthode post pour ajouter un participant
     const { duration_seconds, device_type, email_address, location_region} = req.body;
     let result = await addParticipant({ duration_seconds, device_type,email_address, location_region });
     res.send(result);
   });
 
 module.exports = { router };
