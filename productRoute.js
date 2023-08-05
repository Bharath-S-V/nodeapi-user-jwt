const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productcontroller");

//create an Product
router.post("/", createProduct);

//read an product
router.get("/", getProducts);

//read an product by id
router.get("/:id", getProduct);

//update the product
router.put("/:id", updateProduct);

//delete an product
router.delete("/:id", deleteProduct);

module.exports = router;
