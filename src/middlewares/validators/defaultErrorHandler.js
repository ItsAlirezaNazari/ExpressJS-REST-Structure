const { validationResult } = require('express-validator');

function errorFormatter({ location, msg, param, value, nestedErrors }) {
   return msg
}

module.exports = function (req, res, next) {
   const errors = validationResult(req).formatWith(errorFormatter);
   if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.mapped() });

   return next();
};
