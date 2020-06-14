const models = require('../../database/models');
const reqResponses = require('../../helpers/responses');
const encPass = require('../../helpers/encrypt');
const genToken = require('../../helpers/utils');

class AuthController {
  static async RegisterUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const hashedPass = encPass.generateHash(password);
      const result = await models.User.create({
        username,
        email,
        password: hashedPass,
      });

      const token = genToken.generateToken({
        id: result.id,
        email: result.email,
        username: result.username,
      });

      const message = [201, 'User created successfully', true];
      return res.status(message[0]).json({
        success: message[2],
        message: message[1],
        result,
        token,
      });
    } catch (error) {
      return reqResponses.handleError(error.toString(), 500, res);
    }
  }
}

module.exports = AuthController;
