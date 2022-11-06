const autoBind = require('auto-bind');

class Service {
	constructor() {
		autoBind(this);
	}
}

module.exports = Service;
