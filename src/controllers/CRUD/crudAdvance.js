const User = require("../../models/userModel");



const Get =(User)=>async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const Address = user.address;
        return res.status(201).send({ data: Address});
    } 
    catch (error) {
        res.status(500).send({error: error.message });
    }
  }

const Patch=(User)=> async(req,res)=>{
    try {
        const updated = await User.updateOne({_id:req.params.id}, {$push :{address: req.body}} )

        if (updated.acknowledged === true) {
            const user = await User.findById(req.params.id).lean().exec();
            return res.status(200).send({ data: user.address});
          }
         return  res.status(400).send({error: error.message ,status:"went wrong"});
    } catch (error) {
        res.status(500).send({error: error.message });
    }
}


const Patchandset=(User)=> async(req,res)=>{
    try {
        const Add = await User.updateOne(
          { _id: req.params.id, "address._id": req.params.idx },
          { $set: { "address.$": req.body } }
        );
        if (Add.acknowledged === true) {
          const user = await User.findById(req.params.id).lean().exec();
          return res.status(201).send({ data: user.address, message: "success" });
        }
        return res.status(404).send({ error: "something went wrong" });
      } catch (error) {
        res.status(500).send({error: error.message });
      }
}


module.exports = (model) => {
    return {
      Get: Get(model),
      Patch:Patch(model),
      Patchandset:Patchandset(model),
    };
  };