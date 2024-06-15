const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json( ));
app.use(cors());


const db = require('./models');

//Routers
const clientsRouter = require("./routes/Clients");
app.use("/clients", clientsRouter);




db.sequelize.sync().then(() => {

    app.listen(3001, () => {
        console.log("Server Running")
    });
    
    }
);

