const router = require('express').Router()

const users = require('./users')
const companies = require('./companies')


router.use('/users', users)
router.use('/companies', companies)

module.exports = router