const router = require('express').Router()
const UserController = require('../controllers/userController')
const { authenticateToken } = require('../middlewares/jwt')

router.post('/registration', authenticateToken, UserController.registerUser)

router.get('/', UserController.findAllUser)

router.get('/getOne', authenticateToken, UserController.findUser)

router.get('/company', authenticateToken, UserController.findUsersByCompany)

router.post('/token', UserController.getToken)

router.post('/login', UserController.loginUser)

router.delete('/logout', UserController.logoutUser)

router.delete("/delete/:userId", authenticateToken, UserController.deleteUserById)

module.exports = router