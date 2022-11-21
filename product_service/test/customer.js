process.env.NODE_ENV = 'test'

let mongoose = require('mongoose');
let Customer = require("../app/controllers/model/Customer");

//Require Dev Dependencies
let chai = require('chai')
let chaiHttp = require('chai-http');
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);
//parent block
describe('Customer', () => {
    //Empty the DB before each Test
    beforeEach((done) => {
        Customer.deleteMany({}, error => {
            done();
        })
    })

})

    //Test the Get route
    describe('/GET Customer', () => {
        it('should get all Customers', (done) => {
            chai.request(server)
                .get('/customer')
                .end((err, res) => {
                   
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0)
                    done();

                });

        });

    });

    describe('/POST Customer', () => {
        it('should create a customer', (done) => {
            let customer = {
                "customerId": "090990",
                "name": "Saleh Umar",
                "phoneNumber": "0909990099"
                
            }
            chai.request(server)
                .post('/customer')
                .send(customer)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('customerId');
                    res.body.should.have.property('name');
                    res.body.should.have.property('phoneNumber');
                    done();
                })
        })
    })

