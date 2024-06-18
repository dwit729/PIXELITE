
const express = require('express');
const router = express.Router();
const { Events, sequelize } = require('../models');



router.get("/", async (req, res) =>{
    const listOfEvents = await Events.findAll()
    res.json(listOfEvents)
});

router.post("/", async (req,res) =>{
    const event = req.body
    await Events.create(event)
    res.json(event)
});


router.get("/test", async (req,res) =>{
    const listOfEvents = await sequelize.query(`SELECT e.*, c.client_name
        FROM events e
        JOIN clients c ON e.ClientClientId = c.client_id;`)
    res.json(listOfEvents)
});


module.exports = router;