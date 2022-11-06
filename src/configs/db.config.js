const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	autoIndex: false,
	user: process.env.DB_USERNAME,
	pass: process.env.DB_PASSWORD,
};

module.exports = { uri, options };
