const router = require('express').Router()
const userController = require('../controllers/userController')
const { authenticateToken } = require('../middlewares/jwt')

router.post('/registration', authenticateToken, userController.registerUser)

router.get('/getOne', authenticateToken, userController.findUser)

router.get('/company', authenticateToken, userController.findUsersByCompany)

router.post('/token', userController.getToken)

router.post('/login', userController.loginUser)

router.delete('/logout', userController.logoutUser)

router.delete("/delete/:userId", authenticateToken, userController.deleteUser)

module.exports = router