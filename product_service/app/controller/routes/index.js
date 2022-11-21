
const config = require("../../../config")
const Product = require("../model/Product")

module.exports=(app)=>{
    /**
     * Create a customers Record
     * 
     */
    app.post("/product",async(req,res)=>{
        try {
            const {productId,name,description,cost} = req.body;
            Product.create( {productId,name,description,cost});
            return res.json({productId,name,description,cost});
        } catch (error) {
            next(error);
        }
    })

    /**
     * Retrieves all Customers
     */
    app.get("/product", async (req,res)=>{
        Product.find({}).exec((error,products)=>{
            if(error)
            res.send(error)
            //No Errors
            res.json(products);
        })
    })

     
    /**
     *Retrieve a particular Customer using the customer Id
     */
     app.get("/product/:productId", async (req,res)=>{
        Customer.find({productId:req.params.productId}).exec((error,product)=>{
            if(error)
            res.send(error)
            //No Errors
            res.json(product);
        })
    })


}