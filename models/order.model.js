import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema ({
  originAddress: { type: String, required: true  },
  destinationAddress: { type: String, required: true  },
  distance: { type: Number, required:true },
  date: { type: Date, required: true },
  price: { type: Number, required:true },
}, {
    timestamps: true,
  });

const Order = mongoose.model('Order', orderSchema)
module.exports = Order;
