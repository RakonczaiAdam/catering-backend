const router = require('express').Router()
const companyController = require('../controllers/companyController')
const { authenticateToken } = require('../middlewares/jwt')

router.post('/registration', companyController.registerCompany)

router.get("/", companyController.findAllCompany)

router.get("/findCompanyByUser", authenticateToken, companyController.findCompanyByUser)

router.put("/update/:companyId", authenticateToken, companyController.updateCompany)

router.delete("/delete/:companyId", authenticateToken, companyController.removeCompany)

router.post("/addLicence/:licenceId", authenticateToken, companyController.addLicence)

router.get("/findLicence", authenticateToken, companyController.findLicenceByCompany)

router.put("/deactivateLicence", authenticateToken, companyController.deactivateLicence)

module.exports = router 