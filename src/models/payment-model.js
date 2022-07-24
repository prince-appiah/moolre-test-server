const { Schema, model } = require("mongoose");

const paymentSchema = new Schema({
  product_id: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Payment = model("Payment", paymentSchema);

module.exports = Payment;
