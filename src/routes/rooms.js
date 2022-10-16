const router = require('express').Router()
const roomController = require('../controllers/roomController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/', [authenticateToken, hasAdminPrivilage], roomController.createRoom)

router.get('/store/:storeId', authenticateToken, roomController.findByStore)

router.put('/:roomId', [authenticateToken, hasAdminPrivilage], roomController.updateRoom)

router.delete('/:roomId', [authenticateToken, hasAdminPrivilage], roomController.deleteRoom)

module.exports = router