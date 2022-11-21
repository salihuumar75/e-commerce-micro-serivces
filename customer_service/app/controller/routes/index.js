
const config = require("../../../config")
const Customer = require("../model/Customer")

module.exports=(app)=>{
    /**
     * Create a customers Record
     * 
     */
    app.post("/customer",async(req,res)=>{
        try {
            const {customerId,name,phoneNumber} = req.body;
            Customer.create( {customerId,name,phoneNumber});
            return res.json({customerId,name,phoneNumber});
        } catch (error) {
            next(error);
        }
    })

    /**
     * Retrieves all Customers
     */
    app.get("/customer", async (req,res)=>{
        Customer.find({}).exec((error,customers)=>{
            if(error)
            res.send(error)
            //No Errors
            res.json(customers);
        })
    })

     
    /**
     *Retrieve a particular Customer using the customer Id
     */
     app.get("/customer/:customerId", async (req,res)=>{
        Customer.find({customerId:req.params.customerId}).exec((error,customer)=>{
            if(error)
            res.send(error)
            //No Errors
            res.json(customer);
        })
    })


}