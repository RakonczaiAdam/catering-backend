const router = require('express').Router()
const collectionController = require("../controllers/collectionController")
const { authenticateToken } = require("../middlewares/jwt")

router.post("/create", authenticateToken, collectionController.createCollection);

router.get("/:collectionId", authenticateToken, collectionController.findById);

router.get("/store/:storeId", authenticateToken, collectionController.findByStore);

router.put("/:collectionId", authenticateToken, collectionController.renameCollection);

router.delete("/:collectionId", authenticateToken, collectionController.deleteCollection);

router.post("/discount", authenticateToken, collectionController.addDiscount);

router.delete("/discount/:collectionDiscountId", authenticateToken, collectionController.removeDiscount);

router.get("/discount/:collectionId", authenticateToken, collectionController.findDiscounts);

module.exports = router