var amqp = require('amqplib/callback_api');
const config = require('../../../config')

const recieveData =async ()=>{
amqp.connect(config.rabbitMq.url,function(error0,connection){
    if(error0)
        throw error0;
    connection.createChannel(function(error1,channel){
        if(error1)throw error1
        
        channel.assertQueue(config.rabbitMq.payment_queue,{durable:false});
        console.log(" [*] Waiting for messages in %s. To exit press ctrl c",config.rabbitMq.payment_queue);
        channel.consume(config.rabbitMq.payment_queue,function(msg){
        console.log(" [X] Recieved %s",msg.content.toString());
           
            //DB 
        const TransactionHistory = require("../model/TransactionHistory")
        const dataItem = JSON.parse(msg.content);
        dataItem.status = "COMPLETED";
        TransactionHistory.create(dataItem);
        },{noAck:true});

    });
});
}

module.exports = recieveData;