const express = require('express');
const router = express.Router();
const { Employees } = require('../models');



router.post("/login",async (req, res) =>{
    try {
        const {emp_id, emp_password} = req.body;
        const client = await Employees.findOne({where: {emp_id: emp_id}});

        if(!client){res.json({error: "Employee doesn't exist"})}
        if(emp_password == client.emp_password){
            res.json(client)
        }
        else{
            res.json({error: "Wrong Password"})
        }
    } catch (error) {
        console.log(error)
    }
    
});


router.post("/get_emp",async (req, res) =>{
    try {
        const {emp_id} = req.body;
        const client = await Employees.findOne({where: {emp_id: emp_id}});
        res.json(client)

    } catch (error) {
        console.log(error)
    }
    
});





module.exports = router;