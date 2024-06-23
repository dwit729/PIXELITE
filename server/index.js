
const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json( ));
app.use(cors());


const db = require('./models');

//Routers
const clientsRouter = require("./routes/Clients");
app.use("/auth", clientsRouter);

const eventsRouter = require("./routes/Events");
app.use("/events", eventsRouter);

const albumRouter = require("./routes/Albums")
app.use("/albums", albumRouter);

const appointRouter = require("./routes/Appointments");
app.use("/appointments", appointRouter);

const mailRouter = require("./routes/MailingList");
app.use("/mail", mailRouter);

const empRouter = require("./routes/Employees");
app.use("/employee", empRouter);




db.sequelize.sync().then(() => {

    app.listen(3001, () => {
        console.log("Server Running")
    });
    
    }
);

