const router = require('express').Router()
const userController = require('../controllers/userController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/', [authenticateToken, hasAdminPrivilage], userController.registerUser)

router.get('/', authenticateToken, userController.findUser)

router.get('/company', authenticateToken, userController.findUsersByCompany)

router.post('/token', userController.getToken)

router.post('/login', userController.loginUser)

router.delete('/logout', userController.logoutUser)

router.delete("/:userId", authenticateToken, userController.deleteUser)

module.exports = router