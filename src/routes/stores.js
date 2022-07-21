const router = require('express').Router()
const storeController = require('../controllers/storeController')
const { authenticateToken } = require('../middlewares/jwt')

router.post('/create', authenticateToken, storeController.createStore)

router.get("/", authenticateToken, storeController.findByUser)

router.put("/update/:storeId", authenticateToken, storeController.updateStore)

router.delete("/delete/:storeId", storeController.deleteStore)

router.post('/addUser', authenticateToken, storeController.addUser)

router.get("/findUsers/:storeId", authenticateToken, storeController.findUsers)

router.delete("/deleteUser/:userStoreId", authenticateToken, storeController.deleteUser)

router.post('/addItem', authenticateToken, storeController.addItem)

router.get("/findItems/:itemId", authenticateToken, storeController.findItems)

router.delete("/deleteItem/:itemStoreId", authenticateToken, storeController.deleteItem)

module.exports = router