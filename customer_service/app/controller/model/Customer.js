const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phoneNumber :{
        type:String,
        required:true
    }
});


module.exports = mongoose.model('Customer',customerSchema);