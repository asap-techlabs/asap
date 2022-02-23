import mongoose from "mongoose";

const Schema = mongoose.Schema;

//data in an order in the database
const orderSchema = new Schema ({
  originAddress: { type: String, required: true  },
  latOrigin: { type: Number, required: true },
  lonOrigin: { type: Number, required: true },
  destinationAddress: { type: String, required: true  },
  latDestination: { type: Number, required: true },
  lonDestination: { type: Number, required: true },
  distance: { type: Number },
  date: { type: Date, required: true },
  price: { type: Number },
}, {
    timestamps: true,
  });


const Order = mongoose.model('Order', orderSchema)

export default Order;
