const express = require('express');
const router = express.Router();
const { Appointments, sequelize } = require('../models');



router.get("/", async (req, res) =>{
    const listOfAppointments = await Appointments.findAll()
    res.json(listOfAppointments)
});

router.post("/add", async (req,res) =>{
    try {
        const event = req.body
        const appointment = await Appointments.create(event)
        res.json(event)
        try {
            await sequelize.query('INSERT INTO `employeeappointmentassignment` (`AppointmentAppId`,`EmployeeEmpId`) VALUES ('+appointment.app_id+','+event.emp_id+');')
        } catch (error) {
            
        }
    } catch (error) {
        console.log(error)
    }
});

router.post("/joined_appointments", async (req, res) =>{
    try {
        const {client_id} = req.body;
        const client = await sequelize.query(`SELECT e.*, c.client_name
                FROM appointments e
                JOIN clients c ON e.ClientClientId = c.client_id
                WHERE e.ClientClientId = ${client_id};
                `)
        res.json(client)

    } catch (error) {
        console.log(error)
    }
    
})

router.post("/getuser_appointments",async (req, res) =>{
    try {
        const {client_id} = req.body;
        const client = await Appointments.findAll({where: {ClientCLientId: client_id}});
        res.json(client)
        console.log(client)
    } catch (error) {
        console.log(error)
    }
    
});



router.put("/update",async (req, res) =>{
    try {
        const {app_id, app_date, app_address, ClientCLientId} = req.body;
        const client = await Appointments.update({
            app_date: app_date,
            app_address: app_address,
        },{where: {app_id: app_id}});
        
        res.json(client)

    } catch (error) {
        console.log(error)
    }
    
});

router.post("/delete",async (req, res) =>{
    try {
        const {app_id} = req.body;
        const client = await sequelize.query(`DELETE FROM appointments WHERE app_id = ${app_id};`)


        res.json(app_id)
    } catch (error) {
        console.log(error)
    }
    
});


router.post("/emp_appoint", async (req,res) => {
    try {
        const {emp_id} = req.body;
        const listOfEvents = await sequelize.query(`SELECT e.EmployeeEmpId, c.*
            FROM employeeappointmentassignment e
            JOIN appointments c ON e.AppointmentAppId = c.app_id
            WHERE e.EmployeeEmpId = ${emp_id};`)

        res.json(listOfEvents)
    } catch (error) {
        res.json({error: error})
    }
})

module.exports = router