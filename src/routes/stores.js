const router = require('express').Router()
const StoreController = require('../controllers/storeController')
const { authenticateToken } = require('../middlewares/jwt')

router.post('/create', StoreController.createStore)

router.get("/", StoreController.findAllStore)

router.get("/company", authenticateToken, StoreController.findByCompanyId)

router.get("/id/:storeId", StoreController.findByStoreId)

router.put("/update/:storeId", ()=>{})

router.delete("/delete/:storeId", ()=>{})

module.exports = router