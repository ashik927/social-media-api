const express = require("express");
const routes = require('./routes');
const { authenticateRequest, handleRequest, handleError } = require("./middlewares");
const cors = require('cors')
const dotenv = require("dotenv");
const swaggerUI = require('swagger-ui-express');

// const bodyParser = require('body-parser')



const app = express();
dotenv.config();

app.use(express.json({limit: '2MB'}));

// app.use(bodyParser.json({limit : '50mb'})); // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({   limit : '50mb', extended: true })); // to support URL-encoded bodies

app.use(cors())
app.use(handleRequest);
try {
    app.use('/api', routes);
}
catch (err) {
    handleError(err);
}


const swaggerDocument = require('./swagger.json')
app.use('/inventory/api-documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use(handleError);

module.exports = app;
