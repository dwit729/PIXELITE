const express = require('express');
const router = express.Router();
const { Clients } = require('../models');
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken');
const { validateToken } = require('../middlewares/AuthMiddleware');


router.get("/", async (req, res) =>{
    const listOfClients = await Clients.findAll()
    res.json(listOfClients)

});

router.post("/", async (req,res) =>{
    const client = req.body
    await Clients.create(client)
    res.json(client)
});



router.post("/login",async (req, res) =>{
    try {
        const {client_email, client_password} = req.body;
        const client = await Clients.findOne({where: {client_email: client_email}});

        if(!client){res.json({error: "Client doesn't exists"})}
        bcrypt.compare(client_password, client.client_password).then((match) => {
        if(!match){res.json({error: "Wrong Password"})}
        else{
            res.json(client)
        }
        })
    } catch (error) {
        console.log(error)
    }
    
});

router.put("/update"), async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err)
    }
}

router.post("/signup", async (req,res) =>{

    try {
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

    } catch (error) {
        console.log(error)
    }
   
});



router.post("/getuser",async (req, res) =>{
    try {
        const {client_id} = req.body;
        const client = await Clients.findOne({where: {client_id: client_id}});
        res.json(client)

    } catch (error) {
        console.log(error)
    }
    
});

router.put("/updateaccount",async (req, res) =>{
    try {
        const {client_name, client_email, client_contact, client_id} = req.body;
        const client = await Clients.update({
            client_name: client_name,
            client_email: client_email,
            client_contact: client_contact
        },{where: {client_id: client_id}});
        

        res.json(client_name)

    } catch (error) {
        console.log(error)
    }
    
});





module.exports = router;