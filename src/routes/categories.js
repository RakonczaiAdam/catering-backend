const router = require('express').Router()
const categoryController = require("../controllers/categoryController")
const { authenticateToken } = require("../middlewares/jwt")

router.post("/create", authenticateToken, categoryController.createCategory)

router.get("/", authenticateToken, categoryController.findByParent)

router.put("/rename/:categoryId", authenticateToken, categoryController.rename)

router.put("/changeParent/:categoryId", authenticateToken, categoryController.changeParent)

router.delete("/delete/:categoryId", authenticateToken, categoryController.deleteCategory)

module.exports = router