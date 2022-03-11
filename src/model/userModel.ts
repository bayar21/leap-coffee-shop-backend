import mongoose, { model, Document } from "mongoose";

interface OTP {
  password: string;
  createdAt: number;
}

export interface UsersInterface extends Document {
  phone: string;
  otp: OTP;
}

export const schema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  otp: {
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Number,
      required: true,
    },
  },
});

export default model<UsersInterface>("users", schema);
