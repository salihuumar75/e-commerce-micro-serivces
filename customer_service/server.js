const express = require("express");
const config = require("./config")
const expressApp = require("./express-app");


const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/connect_db');

expressApp(app);
connectDB();
const seeder = require('./seeder');
seeder();
mongoose.connection.once('open', () => {
    console.log("CONNECTION TO DB SUCCESSFUL");
    app.listen(config.server.port, () => {
        console.log(`CUSTOMER SERVICE STARTED LISTENING ON PORT ${config.server.port} `)

    }).on('error', (err) => {
        console.error(err);
        process.exit();
    })
})





module.exports = app;