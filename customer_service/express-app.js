const express  = require('express')
const cors = require("cors")

module.exports = async (app)=>{
    app.use(express.json());
    app.use(cors());

    //APIS
    const api = require("./app/controller/routes");
    
    api(app)

    
}