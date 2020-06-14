const AuthValidator = require('./userValidators');
const BusinessValidator = require('./bizValidator');

const middleware = {
  AuthValidator,
  BusinessValidator,
};

module.exports = middleware;
