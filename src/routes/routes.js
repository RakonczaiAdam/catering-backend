const router = require('express').Router()

const users = require('./users')
const companies = require('./companies')
const stores = require('./stores')
const licences = require('./licences')
const companyLicences = require('./companyLicences')


router.use('/users', users)
router.use('/companies', companies)
router.use('/stores', stores)
router.use('/licences', licences)
router.use('/companyLicences', companyLicences)

module.exports = router