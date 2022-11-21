
const config = require("../../../config")
const Order = require("../model/Order")
const axois = require('axios')

module.exports = (app) => {
    /**
     * Create a customers Record
     * 
     */
    app.post("/order", async (req, res) => {
        try {
            const { customerId, productId, amount } = req.body;
            //Performing Data Validation
            if (customerId ==undefined || productId == undefined || amount == undefined)
                return res.status(412).json({"code":-1,"message":"customerId,productId amd amount must be provided"});
            
            let orderId = Math.floor(Math.random() * 10000)
            Order.create({ orderId, customerId, productId, amount ,status:'pending'});
            await axois.post(config.payment_service.url, { orderId, customerId, productId, amount,status:'pending' })
                .then(respose => {
                    return res.status(201).json({ orderId, customerId, productId, amount });
                })
                .catch(err => {
                    return res.status(500);
                })

        } catch (error) {
            next(error);
        }
    })

    /**
     * Retrieves all Customers
     */
    app.get("/order", async (req, res) => {
        Order.find({}).exec((error, orders) => {
            if (error)
                res.send(error)
            //No Errors
            res.json(orders);
        })
    })


    /**
     *Retrieve a particular Customer using the customer Id
     */
    app.get("/order/:orderId", async (req, res) => {
        Order.find({ orderId: req.params.orderId }).exec((error, order) => {
            if (error)
                res.send(error)
            //No Errors
            res.json(order);
        })
    })


}