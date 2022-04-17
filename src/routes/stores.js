const router = require('express').Router()
const StoreController = require('../controllers/storeController')
const { authenticateToken, authenticateTokenTEST } = require('../middlewares/jwt')

router.post('/create', authenticateToken, StoreController.createStore)

router.get("/", StoreController.findAllStore)

router.get("/company", authenticateToken, StoreController.findByCompanyId)

router.get("/id/:storeId", StoreController.findByStoreId)

router.put("/update/:storeId", ()=>{})

router.delete("/delete/:storeId", StoreController.deleteStore)

module.exports = router