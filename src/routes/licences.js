const router = require('express').Router()
const licenceController = require('../controllers/licenceController')
const { authenticateToken } = require('../middlewares/jwt')

router.get("/", authenticateToken, licenceController.findAllLicence)

router.get("/:licenceId", licenceController.findLicenceById)

router.post("/", licenceController.createLicence)

router.delete("/:licenceId", licenceController.deleteLicence)

router.put("/:licenceId", licenceController.updateLicence)

module.exports = router