const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

//to get all the users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(200).send({ data: users});
  } catch (error) {
    res.status(500).send({error: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ data: user });
  } catch (error) {
    res.status(500).send({message: "error"});
  }
});

// to get single user by using  id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send({ data: user});
  } catch (error) {
    res.status(500).send({error: error.message });
  }
});


//edit user by id
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({_id:req.params.id} , req.body, {new: true,}).lean().exec();
    return res.status(200).send({ data: user});
  } catch (error) {
    res.status(500).send({error: error.message });
  }
});


//delete users by id
router.delete("/:id/delete", async (req, res) => {
  try {
    const user = await Category.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({ userdata: user});
  } catch (error) {
    res.status(500).send({error: error.message });
  }
});

//get all addresses 
router.get("/:id/address",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const Address = user.address;
        return res.status(201).send({ data: Address});
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
  })
  
  //create a new address 
  router.patch("/:id/address/create", async (req, res) => {
    try {
      const update_Address = await User.updateOne(
        { _id: req.params.id },{ $push: { addresses: req.body } }
      );
      if (update_Address.acknowledged === true) {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(201).send({ data: user.addresses});
      }
      return res.status(404).send({error: "something went wrong" });
    } catch (error) {
      res.status(500).send({error: error.message });
    }
  });

  
//delete the address 
router.delete("/:id/address/:idx", async (req, res) => {
    //not working
    try {
      const delete_Address = await User.updateOne(
        { _id: req.params.id, "address._id": req.params.idx },{ $set: { "address.$": req.body } }
      );
      if (delete_Address.acknowledged === true) {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(201).send({ data: user.address});
      }
      return res.status(404).send({ error: "something went wrong" });
    } catch (error) {
      res.status(500).send({error: error.message });
    }
  });

module.exports = router;