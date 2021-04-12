/**
 * Router file for the seance object
 * This file contains method for handling
 * GET and POST request for the seances
 */
const router = require("express").Router();
const { getSeanceById, addSeance, getAllSeance } = require("../service/seance.service");

router
  .get("/seance", async (req, res) => {
    //get all seances
    res.send(await getAllSeance());
  })
  .get("/seance/:id", async (req, res) => {
    //get seance by id
    const seance = await getSeanceById(req.params.id);
    res.send(seance);
  })
  .post("/seance", async (req, res) => {
    //post method for adding seance
    const { conference_id, startDate, endDate, hasScreenShared } = req.body;
    let result = await addSeance({ conference_id, startDate, endDate, hasScreenShared });
    res.send(result);
  });

module.exports = { router };
