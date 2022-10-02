const router = require('express').Router()
const { authenticateToken } = require('../middlewares/jwt')
const discountController = require('../controllers/discountController')

router.post('/create', authenticateToken, discountController.createDiscount);

router.put('/update/:discountId', authenticateToken, discountController.updateDiscount);

router.get("/", authenticateToken, discountController.findByStore);

router.delete("/delete/:discountId", authenticateToken, discountController.deleteDiscount);

module.exports = router