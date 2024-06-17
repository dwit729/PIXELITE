const express = require('express');
const router = express.Router();
const { Clients } = require('../models');
const bcrypt = require('bcrypt');


router.get("/", async (req, res) =>{
    const listOfClients = await Clients.findAll()
    res.json(listOfClients)

});

router.post("/", async (req,res) =>{
    const client = req.body
    await Clients.create(client)
    res.json(client)
});



router.post("/login", async (req, res) =>{

    const {client_email, client_password} = req.body;
    const client = await Clients.findOne({where: {client_email: client_email}});

    if(!client){res.json({error: "Client doesn't exists"})}
    bcrypt.compare(client_password, client.client_password).then((match) => {
        if(!match){res.json({error: "Wrong Password"})}
        else{res.json("LOGGED IN")}
    })
});

router.post("/signup", async (req,res) =>{
    const {client_name, client_email, client_contact, client_password} = req.body
    bcrypt.hash(client_password, 10).then((hash) =>{
        Clients.create({
            client_name: client_name,
            client_email: client_email,
            client_contact: client_contact,
            client_password: hash,
        })
        res.json("SUCCESS")
    })

});







module.exports = router;