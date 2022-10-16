const router = require('express').Router()
const { authenticateToken } = require('../middlewares/jwt')
const discountController = require('../controllers/discountController')

router.post('/', authenticateToken, discountController.createDiscount);

router.put('/:discountId', authenticateToken, discountController.updateDiscount);

router.get("/:storeId", authenticateToken, discountController.findByStore);

router.delete("/:discountId", authenticateToken, discountController.deleteDiscount);

module.exports = router