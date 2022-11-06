const createHttpError = require('http-errors');

// catch 404 and forward to error handler
module.exports = function (req, res, next) {
	next(createHttpError(404));
};
