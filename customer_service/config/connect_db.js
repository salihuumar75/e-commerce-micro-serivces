const mongoose = require('mongoose');
const config = require('./index')
const connectDB = async ()=>{
        try
        {   
            await mongoose.connect(config.mongodb.url,{
                useUnifiedTopology:true,
                useNewUrlParser:true
            });
           
        }catch(error){
            console.error(error);
        }
};

module.exports = connectDB;