



const express = require("express");
const crud = require("./CRUD/Crudbasic")
const router = express.Router();
// const crudAdvance = require("./crudAdvance")
const Product = require("../models/productModel")

 // for the basic crud 

// router.get("/", async (req,res)=>{
//     try {
//         let page = req.query.page ||1
//         let pagesize = req.query.pagesize ||4
//         let category = req.query.cat;
//         let sort = req.query.sort;
//         let desc  = req.query.desc;

//         const skip = (page-1) *pagesize;

//     } catch (error) {
        
//     }
// })

router.post("/",crud(Product).Post);
router.get("/:id",crud(Product).GetOne);
router.delete("/:id",crud(Product).Delete);
router.patch("/:id",crud(Product).Patch);

module.exports = router;