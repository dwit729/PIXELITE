
const express = require('express');
const router = express.Router();
const { Employees,Events, sequelize } = require('../models');
const { INSERT } = require('sequelize/lib/query-types');



router.get("/", async (req, res) =>{
    const listOfEvents = await Events.findAll()
    res.json(listOfEvents)
});


router.post("/add", async (req,res) =>{
    try {
        const event = req.body
        const create = await Events.create(event)
        res.json(event)
        try {
            await sequelize.query('INSERT INTO `employeeeventassignment` (`EventEventId`,`EmployeeEmpId`) VALUES ('+create.event_id+','+event.emp_id+');')
        } catch (error) {
            console.log(error)
        }
        
    } catch (error) {
        res.json({error: error})
    }
    

});


router.post("/delete", async (req,res) =>{
    try {
        const {event_id} = req.body;
        const client = await sequelize.query(`DELETE FROM events WHERE event_id = ${event_id};`)
        res.json(event_id)
    } catch (error) {
        console.log(error)
    }
});


router.post("/getuser_events",async (req, res) =>{
    try {
        const {client_id} = req.body;
        const client = await Events.findAll({where: {ClientCLientId: client_id}});
        res.json(client)

    } catch (error) {
        console.log(error)
    }
    
});

router.post("/joined_events", async (req, res) =>{
    try {
        const {client_id} = req.body;
        const client = await sequelize.query(`SELECT e.*, c.client_name
                FROM events e
                JOIN clients c ON e.ClientClientId = c.client_id
                WHERE e.ClientClientId = ${client_id};
                `)
        res.json(client)

    } catch (error) {
        console.log(error)
    }
    
})


router.post("/emp_events", async (req,res) => {
    try {
        const {emp_id} = req.body;
        const listOfEvents = await sequelize.query(`SELECT e.EmployeeEmpId, c.*
            FROM employeeeventassignment e
            JOIN events c ON e.EventEventId = c.event_id
            WHERE e.EmployeeEmpId = ${emp_id};`)

        res.json(listOfEvents)
    } catch (error) {
        res.json({error: error})
    }
})

router.put("/update",async (req, res) =>{
    try {
        const {event_date, event_address, EventTypeTypeId, ClientClientId, event_id} = req.body;

        const client = await Events.update({
            event_date: event_date,
            event_address: event_address,
            EventTypeTypeId: EventTypeTypeId,
            ClientClientId: ClientClientId
        },{where: {event_id: event_id}});

        res.json(client)

    } catch (error) {
        console.log(error)
    }
    
});


module.exports = router;