



const express = require("express");
const crud = require("./CRUD/Crudbasic")
const router = express.Router();
// const crudAdvance = require("./crudAdvance")
const Product = require("../models/productModel")

 // for the basic crud 

router.get("/", async (req,res)=>{
       try {
       
    let page  = req.query.page 
    let size  = req.query.size ||5
    let sort = req.query.sort 

    const limit = parseInt(size)
    const skip = (page-1)*size;

    // const product = await Product.find({},{},{limit:limit,skip:skip});
    const product = await Product.find().limit(limit).skip(skip).sort({price:sort}).lean().exec();
    return res.status(200).send([{product, status:"ok"}])
} catch (error) {
   return res.status(404).send(error.message)
}
})

router.post("/",crud(Product).Post);
router.get("/:id",crud(Product).GetOne);
router.delete("/:id",crud(Product).Delete);
router.patch("/:id",crud(Product).Patch);

module.exports = router;