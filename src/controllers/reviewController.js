




const express = require("express");
const crud = require("./CRUD/Crudbasic")
const router = express.Router();
const Review = require("../models/reviewsModel")

 // for the basic crud 
router.post("/",crud(Review).Post);
router.get("/:id",crud(Review).GetOne);
router.delete("/:id",crud(Review).Delete);
router.patch("/:id",crud(Review).Patch);


module.exports = router;