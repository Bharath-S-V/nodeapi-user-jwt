const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter product name"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("product", productSchema);

module.exports = product;
