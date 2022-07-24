const express = require("express");
const ProductController = require("../controllers/product-controller");

module.exports = (app) => {
  let router = express.Router();

  // create product, delete product, list all products,
  router.get("/products", ProductController.listAll);

  router.post("/products", ProductController.createProduct);

  router.delete("/products/:product_id", ProductController.deleteProduct);

  router.post("/payments", ProductController.createPayment);

  router.get("/payments", ProductController.getPayments);

  return router;
};
