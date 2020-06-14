const express = require('express');
const AuthController = require('./Auth');
const middlewares = require('../../middlewares');

const { AuthValidator } = middlewares;

const Router = express.Router();

Router.post(
  '/signup',
  AuthValidator.validateSignup,
  AuthController.RegisterUser,
);

module.exports = Router;
