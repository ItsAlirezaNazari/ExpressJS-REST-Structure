const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const registerValidator = require('../middlewares/validators/register.validator');
const loginValidator = require('../middlewares/validators/login.validator');

router.post('/register', registerValidator, authController.register);
router.post('/login', loginValidator, authController.login);

module.exports = router;
