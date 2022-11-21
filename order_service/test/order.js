process.env.NODE_ENV = 'test'

let mongoose = require('mongoose');
let Order = require("../app/controller/model/Order");


//Require Dev Dependencies
let chai = require('chai')
let chaiHttp = require('chai-http');
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);
//parent block
describe('Order', () => {
    //Empty the DB before each Test
    beforeEach((done) => {
        Order.deleteMany({}, error => {
            done();
        })
    })

})

    //Test the Get route
    describe('/GET Order', () => {
        it('should get all Orders', (done) => {
            chai.request(server)
                .get('/order')
                .end((err, res) => {
                   
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();

                });

        });

    });

    describe('/POST Order', () => {
        it('should create an order', (done) => {
            let order = {
                "orderId": "090990",
                "productId": "PRD009",
                "amount": 2000,
                "customerId":"98080"
                
            }
            chai.request(server)
                .post('/order')
                .send(order)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('orderId');
                    res.body.should.have.property('productId');
                    res.body.should.have.property('amount');
                    done();
                })
        })
    })

    describe('/POST Order Validation Check Missing ProductId', () => {
        it('should create an order', (done) => {
            let order = {
                "OrderId": "090990",
                "amount": 2000
                
            }
            chai.request(server)
                .post('/order')
                .send(order)
                .end((err, res) => {
                    res.should.have.status(412);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code');
                    res.body.should.have.property('message');
                    done();
                })
        })
    })

