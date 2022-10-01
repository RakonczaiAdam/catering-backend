const router = require('express').Router()
const { authenticateToken } = require('../middlewares/jwt')
const itemController = require('../controllers/itemController')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/create', [authenticateToken, hasAdminPrivilage], itemController.createItem)

router.get('/company', authenticateToken, itemController.findItemsByCompany)

router.get('/category/:categoryId', authenticateToken, itemController.findItemsByCategory)

router.get('/category/:storeId', authenticateToken, itemController.findItemsByStore)

router.delete("/delete/:itemId", [authenticateToken, hasAdminPrivilage], itemController.deleteItem)

router.put("/update/:itemId", [authenticateToken, hasAdminPrivilage], itemController.updateItem)

router.post('/addDelivery', [authenticateToken, hasAdminPrivilage], itemController.addDelivery)

router.delete("/deleteDelivery/:deliveryId", [authenticateToken, hasAdminPrivilage], itemController.deleteDelivery)

router.delete("/deleteOldDeliveries/:itemId", [authenticateToken, hasAdminPrivilage], itemController.deleteOldDeliveries)

router.get("/findDeliveriesByItem/:itemId", authenticateToken, itemController.findDeliveriesByItem)

module.exports = router