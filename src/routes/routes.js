const router = require('express').Router()

const users = require('./users')
const companies = require('./companies')
const stores = require('./stores')


router.use('/users', users)
router.use('/companies', companies)
router.use('/stores', stores)

module.exports = router