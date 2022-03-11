import mongoose, { model, Document, Schema } from "mongoose";

export interface SpecialsInterface extends Document {
  name: string;
  productIds: string[];
}

export const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  productIds: [{ type: Schema.Types.ObjectId, ref: "products" }],
});

export default model<SpecialsInterface>("specials", schema);
