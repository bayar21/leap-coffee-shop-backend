import mongoose, { model, Document, Schema } from "mongoose";

interface Extras extends Document {
  name: string;
  calories: number;
  sugar: number;
  fat: number;
  price: number;
}
export interface ProductInterface extends Document {
  name: string;
  categoryId: string;
  basePrice: number;
  thumbnail: string;
  duration: number;
  sizes: Extras[];
  milkTypes: Extras[];
  foamTypes: Extras[];
  creamTypes: Extras[];
}

export const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  sizes: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        calories: {
          type: Number,
          required: true,
        },
        sugar: {
          type: Number,
          required: true,
        },
        fat: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    required: false,
  },
  milkTypes: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        calories: {
          type: Number,
          required: true,
        },
        sugar: {
          type: Number,
          required: true,
        },
        fat: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    required: false,
  },
  foamTypes: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        calories: {
          type: Number,
          required: true,
        },
        sugar: {
          type: Number,
          required: true,
        },
        fat: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    required: false,
  },
  creamTypes: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        calories: {
          type: Number,
          required: true,
        },
        sugar: {
          type: Number,
          required: true,
        },
        fat: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    required: false,
  },
});

export default model<ProductInterface>("products", schema);
