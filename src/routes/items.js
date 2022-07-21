const router = require('express').Router()
const { authenticateToken } = require('../middlewares/jwt')
const itemController = require('../controllers/itemController')

router.post('/create', authenticateToken, itemController.createItem)

router.get('/company', authenticateToken, itemController.findItemsByCompany)

router.get('/category/:categoryId', authenticateToken, itemController.findItemsByCategory)

router.get('/category/:storeId', authenticateToken, itemController.findItemsByStore)

router.delete("/delete/:itemId", authenticateToken, itemController.deleteItem)

router.put("/update/:itemId", authenticateToken, itemController.updateItem)

router.post('/addDelivery', authenticateToken, itemController.addDelivery)

router.delete("/deleteDelivery/:deliveryId", authenticateToken, itemController.deleteDelivery)

router.delete("/deleteOldDeliveries/:itemId", authenticateToken, itemController.deleteOldDeliveries)

router.get("/findDeliveriesByItem/:itemId", authenticateToken, itemController.findDeliveriesByItem)

module.exports = router