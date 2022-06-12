



const Post = (User)=> async (req,res)=>{
  try{
      const user = await User.create(req.body);
      return res.status(201).send({user})
  } catch (error) {
      res.status(500).send({error: error.message});
  }
}

const Get = (User)=>async (req,res)=>{
  try{
      const user = await User.find().lean().exec();
     return res.status(200).send({user});
  } catch (error) {
      res.status(500).send({error: error.message});
  }
}

const GetOne = (User)=> async (req,res)=>{
  try{
      const user = await User.findById(req.params.id).lean().exec();
      return res.status(200).send({user});
  } catch (error) {
      res.status(500).send({error: error.message});
  }
}

const Patch= (User)=> async (req,res)=>{
  try {
      const user = await User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}).lean().exec();
      return res.status(200).send({user})
  } catch (error) {
      res.status(500).send({error: error.message});
  }
}

const Delete = (User)=>async (req,res)=>{
  try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec()

      return res.status(200).send(user);
  } catch (error) {
      res.status(500).send({error:error.message})
  }
}




  module.exports = (model) => {
    return {
      Post: Post(model),
      Get: Get(model),
      GetOne : GetOne(model),
      Delete : Delete(model),
      Patch : Patch(model)
    };
  };