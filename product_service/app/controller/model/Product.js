const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    }
});


module.exports = mongoose.model('Product',productSchema);