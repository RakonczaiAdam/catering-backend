const router = require('express').Router()
const CompanyController = require('../controllers/companyController')
const { authenticateToken } = require('../middlewares/jwt')

router.post('/registration', CompanyController.registerCompany)

router.get("/", CompanyController.findAllCompany)

router.get("/:companyName", CompanyController.findCompanyByName)

router.get("/findCompanyByUser", authenticateToken, CompanyController.findCompanyByUser)

router.put("/update/:companyId", ()=>{})

router.delete("/delete/:companyId", ()=>{})

module.exports = router 