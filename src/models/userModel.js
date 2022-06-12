

const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName:{type:String, required: true},
    lastName :{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    address:[
        {
        state:{type:String, required:true},
        city:{type:String, required:true},
        area:{type:String, required:true},
        pin :{type:Number, required:true, minlength:6}
        }
    ]
},
{
    versionKey:false,
    timestamps:true,
})

const User = mongoose.model("user",userSchema);

module.exports = User;