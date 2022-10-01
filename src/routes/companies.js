const router = require('express').Router()
const companyController = require('../controllers/companyController')
const { authenticateToken } = require('../middlewares/jwt')
const { hasAdminPrivilage } = require('../middlewares/permission')

router.post('/registration', companyController.registerCompany)

router.get("/", companyController.findAllCompany)

router.get("/findCompanyByUser", authenticateToken, companyController.findCompanyByUser)

router.put("/update/:companyId", [authenticateToken, hasAdminPrivilage], companyController.updateCompany)

router.delete("/delete/:companyId", [authenticateToken, hasAdminPrivilage], companyController.removeCompany)

router.post("/addLicence/:licenceId", [authenticateToken, hasAdminPrivilage], companyController.addLicence)

router.get("/findLicence", authenticateToken, companyController.findLicenceByCompany)

router.put("/deactivateLicence", [authenticateToken, hasAdminPrivilage], companyController.deactivateLicence)

module.exports = router 