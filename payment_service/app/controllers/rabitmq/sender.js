var amqp = require('amqplib/callback_api');
const config = require("../../../config")

const {Worker}  =require("worker_threads")

const sendDataToQueue = (queue,data)=>{
    console.log(queue);
    amqp.connect(config.rabbitMq.url,function(errorO,connection){
        if(errorO)
            throw errorO;
        connection.createChannel(function(error1,channel){
            if(error1)
                throw error1;
            channel.assertQueue(config.rabbitMq.payment_queue,{durable:false});
            channel.sendToQueue(config.rabbitMq.payment_queue,Buffer.from(JSON.stringify(data)));
            console.log(" [x] sent %s", data)
            // connection.close();
        });
        
    });
};

module.exports = {
    sendDataToQueue:sendDataToQueue
}



