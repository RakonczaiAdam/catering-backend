const router = require('express').Router()
const LicenceController = require('../controllers/licenceController')

router.get("/", LicenceController.findAllLicence)

router.get("/:licenceId", LicenceController.findLicenceById)

router.post("/create", LicenceController.createLicence)

router.delete("/delete/:licenceId", LicenceController.deleteLicence)

router.put("/update/:licenceId", LicenceController.updateLicence)

module.exports = router