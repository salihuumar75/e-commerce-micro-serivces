process.env.NODE_ENV = 'test'

let mongoose = require('mongoose');
let TransactionHistory = require("../app/controllers/model/TransactionHistory");

//Require Dev Dependencies
let chai = require('chai')
let chaiHttp = require('chai-http');
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);
//parent block
describe('TransactionHistory', () => {
    //Empty the DB before each Test
    beforeEach((done) => {
        TransactionHistory.deleteMany({}, error => {
            done();
        })
    })

})

    //Test the Get route
    describe('/GET TrasactionHistory', () => {
        it('should get all TransactionHistory', (done) => {
            chai.request(server)
                .get('/payment')
                .end((err, res) => {
                   
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0)
                    done();

                });

        });

    });

    describe('/POST TransactionHistory', () => {
        it('should create a payment transaction', (done) => {
            let payment = {
                "customerId": "09090",
                "orderId": "7997",
                "productId": "iuyy",
                "amount": 8000
            }
            chai.request(server)
                .post('/payment')
                .send(payment)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('status').eql('Pending');
                    done();
                })
        })
    })

