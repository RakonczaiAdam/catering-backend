const router = require('express').Router()
const CompanyController = require('../controllers/companyController')

router.post('/registration', CompanyController.registerCompany)

router.get("/", CompanyController.findAllCompany)

router.get("/:companyName", CompanyController.findCompanyByName)

router.put("/update/:companyId", ()=>{})

router.delete("/delete/:companyId", ()=>{})

module.exports = router