const Payment = require("../models/payment-model");
const Product = require("../models/product-model");

class ProductController {
  static async listAll(req, res) {
    try {
      const products = await Product.find({});

      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getPayments(req, res) {
    try {
      const payments = await Payment.find({});

      return res.status(200).json(payments);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async createProduct(req, res) {
    try {
      const { name, price, image } = req.body;

      if (!name || !price || !image) {
        return res.status(400).json({ msg: "Provide all fields" });
      }

      // take uploaded file, upload to firebase and save the downloaded url as the image
      const product = await Product.create({ name, price, image });

      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async createPayment(req, res) {
    try {
      const { product_name, price, product_id } = req.body;

      if (!product_name || !price || !product_id) {
        return res.status(400).json({
          msg: "Product id, name and price are required to initiate payment",
        });
      }

      // take uploaded file, upload to firebase and save the downloaded url as the image
      const payment = await Payment.create({ product_name, price, product_id });

      if (payment !== null) {
        return res
          .status(201)
          .json({ msg: "Product Paid", payment_id: payment._id });
      }
      return res.status(400).json({ msg: "Payment unsuccessful" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { product_id } = req.params;

      if (!product_id) {
        return res.status(400).json({ msg: "Product ID is required" });
      }

      const deleteProduct = await Product.findByIdAndDelete(product_id);

      return res.status(204).json(deleteProduct);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = ProductController;
