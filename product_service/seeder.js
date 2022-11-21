let mongoose = require('mongoose');

const dotEnv = require('dotenv');
dotEnv.config();
const connectDB = require('./config/connect_db')
const Product = require('./app/controller/model/Product')

const seeder = async ()=>{

console.log("SEEDING STARTED"); 
const products= [
    {
        productId : "8909-HUIO",
        name :"Bag",
        description :"Zara Bags",
        cost: 2300
    },
    {
        productId : "WE09-HUIO",
        name :"Shoes",
        description :"B & D",
        cost: 3300
    }
    ]

await Product.create(products);
console.log("SEEDING COMPLETED");

}

module.exports = seeder;
