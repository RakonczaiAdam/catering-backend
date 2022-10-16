const router = require('express').Router()
const companyController = require('../controllers/companyController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/', companyController.registerCompany)

router.get("/", companyController.findAllCompany)

router.get("/user", authenticateToken, companyController.findCompanyByUser)

router.put("/:companyId", [authenticateToken, hasAdminPrivilage], companyController.updateCompany)

router.delete("/:companyId", [authenticateToken, hasAdminPrivilage], companyController.removeCompany)

router.post("/licence/:licenceId", [authenticateToken, hasAdminPrivilage], companyController.addLicence)

router.get("/licence", authenticateToken, companyController.findLicenceByCompany)

router.put("/deactivateLicence", [authenticateToken, hasAdminPrivilage], companyController.deactivateLicence)

module.exports = router 