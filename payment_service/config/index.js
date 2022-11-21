const Joi = require('joi');
const dotEnv  = require("dotenv");
dotEnv.config();

const envVarSchema= Joi.object({
    NODE_ENV: Joi.string().allow('development','production','testing')
    .required(),
    PORT:Joi.number().required(),
    RABBIT_MQ_URL:Joi.string().required(),
    MONGODB_URI:Joi.string().required(),
    PAYMENT_QUEUE:Joi.string().required()
}).unknown().required();

const {error,value:envVars}= envVarSchema.validate(process.env);
 if(error)
     throw new Error(`Configuaration Validation Error: ${error.message}`)
const config = {
    env: envVars.NODE_ENV,
    isTest: envVars.NODE_ENV === 'test',
    isDevelopment: envVars.NODE_ENV === 'development',
    server :{
        port: envVars.PORT
    },
    mongodb :{
        url : envVars.NODE_ENV === 'test'?'mongodb://localhost:27017/payment_test':envVars.MONGODB_URI
    },
    rabbitMq :{
        url:envVars.RABBIT_MQ_URL,
        payment_queue: envVars.PAYMENT_QUEUE
    }
}
module.exports = config;