const express = require('express');
const BizController = require('../modules/businesses/Business');
const middlewares = require('../middlewares');

const { BusinessValidator } = middlewares;

const Router = express.Router();

Router.post(
  '/business',
  BusinessValidator.validateBusiness,
  BizController.RegisterBusiness,
);

module.exports = Router;
