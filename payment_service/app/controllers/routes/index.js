const {sendDataToQueue} = require("../rabitmq/sender")
const config = require("../../../config")
const TransactionHistory = require("../model/TransactionHistory")

module.exports=(app)=>{
    /**
     * Create handles payment request and publishes the 
     * data to rabbitmq 
     */
    app.post("/payment",async(req,res)=>{
        try {
            console.log('called')
            const {customerId,orderId,productId,amount} = req.body;
            sendDataToQueue(config.rabbitMq.payment_queue.toString(),{customerId,orderId,productId,amount,status:"Pending"})
            return res.json({customerId,orderId,productId,amount,status:"Pending"});
        } catch (error) {
            next(error);
        }
    })

    /**
     * Retrieves all Payment TransactionHistory
     */
    app.get("/payment", async (req,res)=>{
        TransactionHistory.find({}).exec((error,transactions)=>{
            if(error)
            res.send(error)
            //No Errors
            res.json(transactions);
        })
    })

    /**
     * Retrieve a particular Transaction
     */

    app.get("/payment/:id",(req,res)=>{
        TransactionHistory.findById(req.params.id,(error,transaction)=>{
            if(error)
            res.send(error)
            //No Errors
            res.json(transaction);
        })
    })


    /**
     *Retrieve a particular Transaction By CustomerId
     */
     app.get("/payment/customer/:customerId", async (req,res)=>{
        TransactionHistory.find({customerId:req.params.customerId}).exec((error,transactions)=>{
            if(error)
            res.send(error)
            //No Errors
            res.json(transactions);
        })
    })


}