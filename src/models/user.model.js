const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
	{
		firstname: { type: String },
		lastname: { type: String },
		mobileNumber: { type: String, required: true, unique: true },
	},
	{
		timestamps: true,
	}
);

const Model = mongoose.model('User', Schema);

module.exports = Model;
