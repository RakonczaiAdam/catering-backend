const router = require('express').Router()
const roomController = require('../controllers/roomController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/create', [authenticateToken, hasAdminPrivilage], roomController.createRoom)

router.get('/findByStore/:storeId', authenticateToken, roomController.findByStore)

router.put('/update/:roomId', [authenticateToken, hasAdminPrivilage], roomController.updateRoom)

router.delete('/delete/:roomId', [authenticateToken, hasAdminPrivilage], roomController.deleteRoom)

module.exports = router