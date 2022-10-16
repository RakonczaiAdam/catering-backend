const router = require('express').Router()
const categoryController = require("../controllers/categoryController")
const { authenticateToken } = require("../middlewares/jwt")

router.post("/create", authenticateToken, categoryController.createCategory)

router.get("/:categoryId", authenticateToken, categoryController.findByParent)

router.put("/:categoryId", authenticateToken, categoryController.updateCategory)

router.delete("/:categoryId", authenticateToken, categoryController.deleteCategory)

module.exports = router