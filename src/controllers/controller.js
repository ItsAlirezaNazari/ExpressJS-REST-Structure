const autoBind = require('auto-bind');
const createHttpError = require('http-errors');

class Controller {
	constructor() {
		this.abort = createHttpError;
		autoBind(this);
	}

	// response({ res, code = 200, success = true, data = {} }) {
	// 	res.status(code).json({
	// 		success,
	// 		data,
	// 	});
	// }
}

module.exports = Controller;
