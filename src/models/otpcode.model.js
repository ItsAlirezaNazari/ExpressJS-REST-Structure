const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
	{
		mobileNumber: { type: String, required: true, unique: true },
		code: { type: String, required: true },
		expireAt: { type: Date, required: true },
	},
	{
		timestamps: true,
	}
);

const Model = mongoose.model('OTPCode', Schema);

module.exports = Model;
