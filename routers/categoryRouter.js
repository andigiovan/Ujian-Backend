var express = require("express")
var router =  express.Router()
const {categoryController} = require ("../controllers")

router.post("/addcategory", categoryController.addCategory)
router.patch("/editcategory", categoryController.editCategory)
router.delete("/deletecategory/:id", categoryController.deleteCategory)


module.exports = router