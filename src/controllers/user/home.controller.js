const Controller = require('./../controller');
const User = require('./../../models/user.model');

class HomeController extends Controller {
	async getAll(req, res, next) {
		res.json({message: `hi ${req.auth.mobileNumber}`});
	}
}

module.exports = new HomeController();
