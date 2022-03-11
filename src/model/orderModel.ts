import mongoose, { model, Document, Schema } from "mongoose";

interface Product extends Document {
  productId: string;
  thumbnail: string;
  name: string;
  shots: number;
  price: number;
  size: string;
  foam: string;
  milk: string;
  cream: string;
}
export interface OrderInterface extends Document {
  userId: string;
  storeId: string;
  date: number;
  totalPrice: number;
  status: string;
  quantity: number;
  products: Product[];
  qpay: any;
  paid: boolean;
}

const schema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  storeId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  qpay: {
    type: Object,
    requried: false,
  },
  paid: {
    default: false,
    type: Boolean,
    required: true,
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      shots: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      foam: {
        type: String,
        required: true,
      },
      milk: {
        type: String,
        required: true,
      },
      cream: {
        type: String,
        required: true,
      },
    },
  ],
});

export default model<OrderInterface>("orders", schema);
