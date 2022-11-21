const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    customerId:{
        type:String,
        required:true
    },
    orderId:{
        type:String,
        required:true
    },
    productId :{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
    },
});


module.exports = mongoose.model('TransactionHistory',transactionSchema);