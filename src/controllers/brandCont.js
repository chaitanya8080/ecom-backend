

const express = require("express");
const crud = require("./CRUD/Crudbasic")
const router = express.Router();
const Brand = require("../models/brandModel")

 // for the basic crud 
router.post("/",crud(Brand).Post);
router.get("/",crud(Brand).Get);
router.get("/:id",crud(Brand).GetOne);
router.delete("/:id",crud(Brand).Delete);
router.patch("/:id",crud(Brand).Patch);


module.exports = router;