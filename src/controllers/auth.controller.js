const Controller = require('./controller');
const authConfig = require('./../configs/auth.config');
const authService = require('./../services/auth.service');

class AuthController extends Controller {
	async register(req, res, next) {
		const otpCode = await authService.register(req.body.mobileNumber);

		return res.json({ success: true, data: { otpCode } });
	}

	async login(req, res, next) {
		const result = await authService.login(req.body.mobileNumber, req.body.otpCode);

		if (!result.success) {
			return res.status(400).json({ success: result.success, message: result.message });
		}

		res.cookie('token', result.token, { maxAge: authConfig.tokenExpireAfter, httpOnly: true });
		return res.status(result.statusCode ?? 200).json({ success: result.success, data: result.data });
	}
}

module.exports = new AuthController();
