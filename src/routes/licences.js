const router = require('express').Router()
const licenceController = require('../controllers/licenceController')

router.get("/", licenceController.findAllLicence)

router.get("/:licenceId", licenceController.findLicenceById)

router.post("/create", licenceController.createLicence)

router.delete("/delete/:licenceId", licenceController.deleteLicence)

router.put("/update/:licenceId", licenceController.updateLicence)

module.exports = router