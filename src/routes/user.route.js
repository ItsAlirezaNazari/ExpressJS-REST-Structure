const router = require('express').Router();
const homeController = require('./../controllers/user/home.controller');
const authMiddleware = require('./../middlewares/auth.middleware');

router.get('/', authMiddleware, homeController.getAll);

module.exports = router;
