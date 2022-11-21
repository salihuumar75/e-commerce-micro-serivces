
const seeder = ()=>{
let mongoose = require('mongoose');

const dotEnv = require('dotenv');
dotEnv.config();
const connectDB = require('./config/connect_db')
const Customer = require('./app/controller/model/Customer')

console.log("SEEDING STARTED"); 
const cust= {
    customerId : "8909-HUIO",
    name :"saleh umar",
    phoneNumber :"08090009900"
}

Customer.create(cust);
console.log("SEEDING COMPLETED");
}

module.exports = seeder;
