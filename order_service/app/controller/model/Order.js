const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    productId:{
        type:String,
        required:true
    } ,
    customerId:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
});


module.exports = mongoose.model('Order', orderSchema);