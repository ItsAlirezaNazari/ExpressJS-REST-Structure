const router = require('express').Router();
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const adminRoutes = require('./admin.route');

router.use('/api/auth', authRoutes);
router.use('/api', userRoutes, adminRoutes);

module.exports = router;
