const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const CORS = require('cors');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(CORS());
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to Powered by People!',
}));

module.exports = app;
