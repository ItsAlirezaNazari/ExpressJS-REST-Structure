const { expressjwt: jwt } = require('express-jwt');
const User = require('./../models/user.model');

module.exports = [
	jwt({
		secret: process.env.JWT_KEY,
		algorithms: ['HS256'],
		credentialsRequired: false,
		getToken: function fromHeaderOrQuerystring(req) {
			let token = null;
			if (req && req.cookies) token = req.cookies['token'];
			return token;
		},
	}),

   async (req, res, next) => {
      const user = await User.findById(req.auth.id);
      req.auth = user;
      next();
   }
];
