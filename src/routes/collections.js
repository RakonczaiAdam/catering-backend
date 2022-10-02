const router = require('express').Router()
const collectionController = require("../controllers/collectionController")
const { authenticateToken } = require("../middlewares/jwt")

router.post("/create", authenticateToken, collectionController.createCollection);

router.get("/:collectionId", authenticateToken, collectionController.findById);

router.get("/store/:storeId", authenticateToken, collectionController.findByStore);

router.put("/update/:collectionId", authenticateToken, collectionController.renameCollection);

router.delete("/delete/:collectionId", authenticateToken, collectionController.deleteCollection);

router.post("/addDiscount", authenticateToken, collectionController.addDiscount);

router.delete("/deleteDiscount/:collectionDiscountId", authenticateToken, collectionController.removeDiscount);

router.get("/discounts/:collectionId", authenticateToken, collectionController.findDiscounts);

module.exports = router