const router = require('express').Router()
const printerController = require('../controllers/printerController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/', [authenticateToken, hasAdminPrivilage], printerController.createPrinter)

router.put('/:printerId', [authenticateToken, hasAdminPrivilage], printerController.updatePrinter)

router.post('/room', [authenticateToken, hasAdminPrivilage], printerController.addRoom)

router.post('/item', [authenticateToken, hasAdminPrivilage], printerController.addItem)

router.get('/store/:storeId', authenticateToken, printerController.findByStore)

router.get('/room/:roomId', authenticateToken, printerController.findByRoom)

router.get('/item/:itemId', authenticateToken, printerController.findByItem)

router.delete('/:printerId', [authenticateToken, hasAdminPrivilage], printerController.deletePrinter)

router.delete('/room/:roomPrinterId', [authenticateToken, hasAdminPrivilage], printerController.deleteRoom)

router.delete('/item/:itemPrinterId', [authenticateToken, hasAdminPrivilage], printerController.deleteItem)

module.exports = router