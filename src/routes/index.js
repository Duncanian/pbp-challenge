const HttpStatus = require('http-status');
const authRouter = require('./auth');

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, authRouter);
  app.use('*', (req, res) => 
    res.status(HttpStatus.NOT_FOUND).json({
        message: 'Oops, we lost you!.'
    }));
  return app;
};

module.exports = routes;