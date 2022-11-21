# E-commerce Microservices Driven Application
This is a micro services based application for an e-commerce website. Each microservice is configure to check 
have it own database, do Configuration Validation during deployment  and is each is fitted with a test module.
## Directory Structure
    -- Root Directory/
        -- customer_service/
        -- order_service/
        -- payment_service/
        -- product_service/
        -- docker-compose.yml
        -- ReadMe.md
## Services
1. Customer Service : customer_service directory
2. Order Service : order_service directory
3. Payment Service : payment_service directory
4. Product Service : product_service directory

Each micro-service contains a similar directory structure.

    micro-service/
        -- app/
            -- controller/
                -- model/
                -- routes/
                -- rabitmq
        -- config/
        -- test/
        -- .env
        -- Dockerfile
        -- express-app.js
        -- seeder.js
        -- package.json
        -- server.js

## RUN The Project
To run the project is assumed you have [Docker](https://www.docker.com) installed an setup. From the parent directory of your project run the following command:

    docker compose up -d

This will setup mongodb, rabbitmq and the microservices needed for the project to run. The database will seeded with a customer record and some products.

## Endpoints
 /payment for payment_service  
 /customer for customer_service  
 /order for order_service  
 /product for product_service

 ## TEST (BDD)
 Each project contains a test directory and a script is configured to execute these tests. [Mochajs](https://mochajs.org/#getting-started) with [Chaijs](https://www.chaijs.com) were used to build the test. run the following command from a micro service directory to run test
```
yarn run test
```
