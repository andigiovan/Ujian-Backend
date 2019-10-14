var express = require("express")
var router =  express.Router()
const {movieController} = require ("../controllers")

router.post("/addmovies", movieController.addMovie)
router.patch("/editmovies", movieController.editMovie)
router.delete("/deletemovies/:id", movieController.deleteMovie)


module.exports = router