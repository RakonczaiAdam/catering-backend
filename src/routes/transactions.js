const router = require('express').Router()
const transactionController = require('../controllers/transactionController')
const { authenticateToken } = require('../middlewares/jwt')

router.post('/', authenticateToken, transactionController.createTransaction)

router.put('/close/:tableId', authenticateToken, transactionController.closeTransaction)

router.put('/updateTable/:tableId', authenticateToken, transactionController.updateTable)

router.get('/table/:tableId', authenticateToken, transactionController.findByTable)

router.get('/:transactionId', authenticateToken, transactionController.findById)

router.put('/collection/:tableId', authenticateToken, transactionController.addCollection)

router.post('/item', authenticateToken, transactionController.addTransactionItem)

router.get('/item/:tableId', authenticateToken, transactionController.findTransactionItems)

router.delete('/item/:transactionItemId', authenticateToken, transactionController.deleteTransactionItem)

router.post('/separateItems/:tableId', authenticateToken, transactionController.separateTransactionItems)

module.exports = router