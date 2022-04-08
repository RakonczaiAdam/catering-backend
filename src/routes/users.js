const router = require('express').Router()
const UserController = require('../controllers/userController')
const { authenticateToken } = require('../middlewares/jwt')

router.get('/', UserController.findAllUser)

router.get('/getOne', authenticateToken, UserController.findUser)

router.post('/token', UserController.getToken)

router.post('/login', UserController.loginUser)

router.delete('/logout', UserController.logoutUser)

router.post('/registration', authenticateToken, UserController.registerUser)

module.exports = router