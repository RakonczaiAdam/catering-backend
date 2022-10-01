const router = require('express').Router()
const printerController = require('../controllers/printerController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/create', [authenticateToken, hasAdminPrivilage], printerController.createPrinter)

router.put('/update/:printerId', [authenticateToken, hasAdminPrivilage], printerController.updatePrinter)

router.post('/addRoom', [authenticateToken, hasAdminPrivilage], printerController.addRoom)

router.post('/addItem', [authenticateToken, hasAdminPrivilage], printerController.addItem)

router.get('/findByStore/:storeId', authenticateToken, printerController.findByStore)

router.get('/findByRoom/:roomId', authenticateToken, printerController.findByRoom)

router.get('/findByItem/:itemId', authenticateToken, printerController.findByItem)

router.delete('/delete/:printerId', [authenticateToken, hasAdminPrivilage], printerController.deletePrinter)

router.delete('/deleteRoom/:roomPrinterId', [authenticateToken, hasAdminPrivilage], printerController.deleteRoom)

router.delete('/deleteItem/:itemPrinterId', [authenticateToken, hasAdminPrivilage], printerController.deleteItem)

module.exports = router