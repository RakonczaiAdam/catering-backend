const router = require('express').Router()
const tableController = require('../controllers/tableController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/', [authenticateToken, hasAdminPrivilage], tableController.createTable)

router.get('/room/:roomId', authenticateToken, tableController.findByRoom)

router.put('/:tableId', [authenticateToken, hasAdminPrivilage], tableController.updateTable)

router.put('/updateState/:tableId', [authenticateToken, hasAdminPrivilage], tableController.updateState)

router.delete('/:tableId', [authenticateToken, hasAdminPrivilage], tableController.deleteTable)

router.post('/reservation/:tableId', authenticateToken, tableController.addReservation)

router.delete('/reservation/:reservationId', authenticateToken, tableController.deleteReservation)

router.get('/reservation/:tableId', authenticateToken, tableController.findReservations)

module.exports = router