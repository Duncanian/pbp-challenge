const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const CORS = require('cors');
const routes = require('./routes');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(CORS());
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set base url for api
routes(app);

module.exports = app;
