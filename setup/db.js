const mongoose = require('mongoose');
const debug = require('debug')('app:main');
const dbConfig = require('../src/configs/db.config');

mongoose.set('autoCreate', false);
mongoose.connection.on('error', (err) => debug(err));
mongoose.connection.on('disconnected', (err) => debug(err));

async function connect() {
	try {
		await mongoose.connect(dbConfig.uri, dbConfig.options);
		debug('connected to mongodb');
	} catch (error) {
		debug('could not connect to mongodb');
		debug(error);
	}
}

module.exports = connect;
