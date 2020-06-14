const models = require('../database/models');
const reqResponses = require('../helpers/responses');

let message;

class BusinessValidator {
  static async validateBusiness(req, res, next) {
    try {
      const { 
        name,
        abbreviation,
        address,
        countriesAvail,
        country,
        sales,
        software,
        entity,
      } = req.body;

      let re;
      if (
        name === '' ||
        abbreviation === '' ||
        address === '' ||
        countriesAvail === '' ||
        country === '' ||
        sales === '' ||
        software === '' ||
        entity === ''
        ) {
        message = 'Kindly fill all fields in order to register your business';
        return reqResponses.handleError(message, 400, res);
      }
      const businessExists = await models.Business.findOne({
        where: { name: name },
      });
      if (businessExists) {
        message = `Sorry, a business with the name ${name} already exists`;
        return reqResponses.handleError(message, 400, res);
      }
      next();
    } catch (error) {
      return reqResponses.handleError(error.toString(), 500, res);
    }
  }
}

module.exports = BusinessValidator;
