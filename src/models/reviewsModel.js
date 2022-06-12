

const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {

    review: { type: String, required: false },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:false,
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Review = mongoose.model("review", reviewsSchema);

module.exports = Review;