const jwt = require('jsonwebtoken');
const moment = require('moment');
const Service = require('./service');
const authConfig = require('./../configs/auth.config');
const User = require('./../models/user.model');
const OTPCode = require('./../models/otpcode.model');

class AuthService extends Service {
	#generateOTP(number_of_digits = 4) {
		// Declare a digits variable
		// which stores all digits
		let digits = '0123456789';
		let OTP = '';

		for (let i = 0; i < number_of_digits; i++) {
			OTP += digits[Math.floor(Math.random() * 10)];
		}

		return OTP;
	}

	async register(mobileNumber) {
		const code = this.#generateOTP();
		const expireAt = moment().add(authConfig.otpExpireAfter, 'ms');

		await OTPCode.updateOne({ mobileNumber }, { code, expireAt }, { upsert: true });

		// send request to sms otp code
		// ...
		
		return code;
	}

	async login(mobileNumber, otpCode) {
		const otpRecord = await OTPCode.findOne({ mobileNumber, code: otpCode });

		if (!(otpRecord && moment(otpRecord.expireAt).isAfter())) {
			return { success: false, message: 'کد نامعتبر است' };
		}

		let user = await User.findOne({ mobileNumber });
		let statusCode = 200;

		if (!user) {
			user = await User.create({ mobileNumber });
			statusCode = 201;
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: authConfig.tokenExpireAfter });

		return { success: true, data: { user }, statusCode, token };
	}
}

module.exports = new AuthService();
