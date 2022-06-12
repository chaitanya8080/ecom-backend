



const express = require("express");
const crud = require("./CRUD/Crudbasic")
const router = express.Router();
const Category = require("../models/categoryModel")

 // for the basic crud 
router.post("/",crud(Category).Post);
router.get("/",crud(Category).Get);
router.get("/:id",crud(Category).GetOne);
router.delete("/:id",crud(Category).Delete);
router.patch("/:id",crud(Category).Patch);


module.exports = router;