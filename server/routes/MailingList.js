
const express = require('express');
const router = express.Router();
const { MailingList, sequelize } = require('../models');




router.post("/getuser_photos",async (req, res) =>{
    try {
        const {client_id} = req.body;
        const client = await MailingList.findAll({where: {ClientCLientId: client_id}});
        res.json(client)

    } catch (error) {
        console.log(error)
    }
    
});


router.post("/all_photos", async (req,res) =>{
    try {
        const photos = await MailingList.findAll()
        res.json(photos)
    } catch (error) {
        
    }
});


module.exports = router;