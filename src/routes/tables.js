const router = require('express').Router()
const tableController = require('../controllers/tableController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/create', [authenticateToken, hasAdminPrivilage], tableController.createTable)

router.get('/findByRoom:roomId', authenticateToken, tableController.findByRoom)

router.put('/update/:tableId', [authenticateToken, hasAdminPrivilage], tableController.updateTable)

router.put('/updateState/:tableId', [authenticateToken, hasAdminPrivilage], tableController.updateState)

router.delete('/delete/:tableId', [authenticateToken, hasAdminPrivilage], tableController.deleteTable)

router.post('/addReservation/:tableId', authenticateToken, tableController.addReservation)

router.delete('/deleteReservation/:reservationId', authenticateToken, tableController.deleteReservation)

router.get('/findReservations/:tableId', authenticateToken, tableController.findReservations)

module.exports = router