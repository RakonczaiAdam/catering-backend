const router = require('express').Router()
const UserStoreController = require('../controllers/userStoreController')
const { authenticateToken } = require('../middlewares/jwt')

router.post('/create', authenticateToken, UserStoreController.createUserStore)

router.get('/company', authenticateToken, UserStoreController.findByCompanyId)

router.delete('/delete/:userStoreId', authenticateToken, UserStoreController.deleteById)
module.exports = router