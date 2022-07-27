const router = require('express').Router()
const vatController = require('../controllers/vatController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/create', [authenticateToken, hasAdminPrivilage], vatController.createVat)

router.get('/findByCompany/:companyId', authenticateToken, vatController.findVatByCompany)

router.put('/update/:vatId', [authenticateToken, hasAdminPrivilage], vatController.updateVat)

router.delete('/delete/:vatId', [authenticateToken, hasAdminPrivilage], vatController.deleteVat)

module.exports = router