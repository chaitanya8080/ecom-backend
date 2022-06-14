


const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandname: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand;