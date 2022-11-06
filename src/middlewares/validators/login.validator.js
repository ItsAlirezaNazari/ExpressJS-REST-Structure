const { body } = require('express-validator');
const defaultErrorHandler = require('./defaultErrorHandler');

module.exports = [
	body('mobileNumber')
		.trim()
		.notEmpty()
		.withMessage('ورود شماره موبایل ضروری است')
		.isString()
		.matches(/^(09)\d{9}$/)
		.withMessage('شماره موبایل معتبر نیست'),

	body('otpCode').trim().isString().withMessage('کد معتبر نیست'),

	// validation error handler
	defaultErrorHandler
];
