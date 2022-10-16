const router = require('express').Router()
const storeController = require('../controllers/storeController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/', [authenticateToken, hasAdminPrivilage], storeController.createStore)

router.get("/", authenticateToken, storeController.findByUser)

router.put("/:storeId", [authenticateToken, hasAdminPrivilage], storeController.updateStore)

router.delete("/:storeId", [authenticateToken, hasAdminPrivilage], storeController.deleteStore)

router.post('/user', [authenticateToken, hasAdminPrivilage], storeController.addUser)

router.get("/user/:storeId", authenticateToken, storeController.findUsers)

router.delete("/user/:userStoreId", [authenticateToken, hasAdminPrivilage], storeController.deleteUser)

router.post('/item', [authenticateToken, hasAdminPrivilage], storeController.addItem)

router.get("/item/:storeId", authenticateToken, storeController.findItems)

router.delete("/item/:itemStoreId", [authenticateToken, hasAdminPrivilage], storeController.deleteItem)

module.exports = router