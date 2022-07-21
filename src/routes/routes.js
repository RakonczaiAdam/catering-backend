const router = require('express').Router()

const users = require('./users')
const companies = require('./companies')
const stores = require('./stores')
const licences = require('./licences')
const items = require('./items')
const userStores = require('./userStores')


router.use('/users', users)
router.use('/companies', companies)
router.use('/stores', stores)
router.use('/licences', licences)
router.use('/items', items)
router.use('/userStores', userStores)

module.exports = router