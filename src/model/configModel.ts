import mongoose, { model, Document, Schema } from "mongoose";

export interface ConfigInterface extends Document {
  name: string;
  data: string;
}

export const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

export default model<ConfigInterface>("configs", schema);
