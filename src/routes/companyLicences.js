const router = require('express').Router()
const CompanyLicenceController = require('../controllers/companyLicenceController')
const { authenticateToken } = require('../middlewares/jwt')

router.post("/create", authenticateToken, CompanyLicenceController.createCompanyLicence)

router.get("/licence", authenticateToken, CompanyLicenceController.findLicenceByCompany)

router.put("/update", authenticateToken, CompanyLicenceController.updateLicenceByCompany)

module.exports = router