const router = require('express').Router()
const { authenticateToken } = require('../middlewares/jwt')
const ItemController = require('../controllers/itemController')

router.post('/create', authenticateToken, ItemController.createItem)

router.get('/company', authenticateToken, ItemController.getItemsByCompany)

router.delete("/delete/:itemId", authenticateToken, ItemController.deleteItemById)

module.exports = router