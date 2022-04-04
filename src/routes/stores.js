const router = require('express').Router()
const StoreController = require('../controllers/storeController')

router.post('/create', StoreController.createStore)

router.get("/", StoreController.findAllStore)

router.get("/company/:companyId", StoreController.findByCompanyId)

router.get("/id/:storeId", StoreController.findByStoreId)

router.put("/update/:storeId", ()=>{})

router.delete("/delete/:storeId", ()=>{})

module.exports = router