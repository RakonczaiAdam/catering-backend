const router = require('express').Router()
const CompanyController = require('../controllers/companyController')

router.post('/registration', CompanyController.registerCompany)

router.get("/", CompanyController.findAllCompany)

router.get("/:companyName", CompanyController.findCompanyByName)

module.exports = router