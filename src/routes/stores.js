const router = require('express').Router()
const storeController = require('../controllers/storeController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/create', [authenticateToken, hasAdminPrivilage], storeController.createStore)

router.get("/", authenticateToken, storeController.findByUser)

router.put("/update/:storeId", [authenticateToken, hasAdminPrivilage], storeController.updateStore)

router.delete("/delete/:storeId", [authenticateToken, hasAdminPrivilage], storeController.deleteStore)

router.post('/addUser', [authenticateToken, hasAdminPrivilage], storeController.addUser)

router.get("/findUsers/:storeId", authenticateToken, storeController.findUsers)

router.delete("/deleteUser/:userStoreId", [authenticateToken, hasAdminPrivilage], storeController.deleteUser)

router.post('/addItem', [authenticateToken, hasAdminPrivilage], storeController.addItem)

router.get("/findItems/:storeId", authenticateToken, storeController.findItems)

router.delete("/deleteItem/:itemStoreId", [authenticateToken, hasAdminPrivilage], storeController.deleteItem)

module.exports = router