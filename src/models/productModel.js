const mongoose  = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        
        price:{type:Number,required:true},

        image:{type:String, required:true},
        
        description:{type:String, required:true},
       
        rating:{type:Number, required:false},
   
        categories_id:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"category",
                required:true,
            }],
        
    },
    {
        versionKey: false,
        timestamps:true,
    }
);

const Product = mongoose.model("product", productSchema);

module.export = Product
