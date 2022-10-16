const router = require('express').Router()
const { authenticateToken } = require('../middlewares/jwt')
const itemController = require('../controllers/itemController')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/', [authenticateToken, hasAdminPrivilage], itemController.createItem)

router.get('/', authenticateToken, itemController.findItemsByCompany)

router.get('/category/:categoryId', authenticateToken, itemController.findItemsByCategory)

router.get('/store/:storeId', authenticateToken, itemController.findItemsByStore)

router.delete("/:itemId", [authenticateToken, hasAdminPrivilage], itemController.deleteItem)

router.put("/:itemId", [authenticateToken, hasAdminPrivilage], itemController.updateItem)

router.post('/delivery', [authenticateToken, hasAdminPrivilage], itemController.addDelivery)

router.delete("/delivery/:deliveryId", [authenticateToken, hasAdminPrivilage], itemController.deleteDelivery)

router.delete("/delivery/item/:itemId", [authenticateToken, hasAdminPrivilage], itemController.deleteOldDeliveries)

router.get("/delivery/:itemId", authenticateToken, itemController.findDeliveriesByItem)

module.exports = router