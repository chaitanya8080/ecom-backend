


const express = require("express");
const crud = require("./Crudbasic")
const router = express.Router();
const crudAdvance = require("./crudAdvance")
const User = require("../models/userModel")

 // for the basic crud 
router.post("/",crud(User).Post);
router.get("/",crud(User).Get);
router.get("/:id",crud(User).GetOne);
router.delete("/:id",crud(User).Delete);
router.patch("/:id",crud(User).Patch);


// for the advance crud things 

router.get("/:id/address", crudAdvance(User).Get)
router.patch("/:id/address",crudAdvance(User).Patch);

module.exports = router;