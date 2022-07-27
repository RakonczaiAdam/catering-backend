const router = require('express').Router()
const transactionController = require('../controllers/transactionController')
const { authenticateToken } = require('../middlewares/jwt')

router.post('/create', authenticateToken, transactionController.createTransaction)

router.put('/close/:tableId', authenticateToken, transactionController.closeTransaction)

router.put('/updateTable/:tableId', authenticateToken, transactionController.updateTable)

router.get('/findByTable/:tableId', authenticateToken, transactionController.findByTable)

router.get('/findById/:transactionId', authenticateToken, transactionController.findById)

router.put('/addCollecrion/:tableId', authenticateToken, transactionController.addCollection)

router.post('/addItem', authenticateToken, transactionController.addTransactionItem)

router.get('/findItems/:tableId', authenticateToken, transactionController.findTransactionItems)

router.delete('/deleteItem/:transactionItemId', authenticateToken, transactionController.deleteTransactionItem)

router.post('/separateItems/:tableId', authenticateToken, transactionController.separateTransactionItems)

module.exports = router