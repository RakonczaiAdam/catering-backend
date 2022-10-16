const router = require('express').Router()
const vatController = require('../controllers/vatController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/', [authenticateToken, hasAdminPrivilage], vatController.createVat)

router.get('/company/:companyId', authenticateToken, vatController.findVatByCompany)

router.put('/:vatId', [authenticateToken, hasAdminPrivilage], vatController.updateVat)

router.delete('/:vatId', [authenticateToken, hasAdminPrivilage], vatController.deleteVat)

module.exports = router