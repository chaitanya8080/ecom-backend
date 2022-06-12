const mongoose  = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        productname:{type:String, required:true},
        image:{type:String, required:true},
        price:{type:Number,required:true},

        description:{type:String, required:true},
       
        rating:{type:Number, required:false},
        
        brand:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"brand",
            required:false,
        },
        categories_id:[
            {
            categories_id:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"category",
                required:false,
            },
        }
      ],
    },
    {
        versionKey: false,
        timestamps:true,
    }
);

const Product = mongoose.model("product", productSchema);

module.export = Product
