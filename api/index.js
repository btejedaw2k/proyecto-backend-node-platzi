const express = require('express');
const bodyParser = require('body-parser');

const swaggerUI = require('swagger-ui-express');

const config = require('../config.js');
const user = require('./components/user/network');
const app = express();

app.use(bodyParser.json());
const swaggerDoc = require('./swagger.json');
// Routing

app.use('/api/user', user);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(config.api.port, () => {
    console.log('Api port is listening in port ', config.api.port);
});