const router = require('express').Router()
const { authenticateToken } = require('../middlewares/jwt')
const couponController = require('../controllers/couponController')

router.post('/create', authenticateToken, couponController.createCoupon)

router.put('/use', authenticateToken, couponController.use)

module.exports = router