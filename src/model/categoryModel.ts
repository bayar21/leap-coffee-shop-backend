import mongoose, { model, Document } from "mongoose";

export interface CategoryInterface extends Document {
  name: string;
}

export const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default model<CategoryInterface>("categories", schema);
