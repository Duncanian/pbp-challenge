const models = require('../../database/models');
const reqResponses = require('../../helpers/responses');

class BusinessController {
  static async RegisterBusiness(req, res) {
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
      const result = await models.Business.create({
        name,
        abbreviation,
        address,
        countriesAvail,
        country,
        sales,
        software,
        entity,
      });

      const message = [201, 'Business created successfully', true];
      return res.status(message[0]).json({
        success: message[2],
        message: message[1],
        result,
      });
    } catch (error) {
      return reqResponses.handleError(error.toString(), 500, res);
    }
  }
}

module.exports = BusinessController;
