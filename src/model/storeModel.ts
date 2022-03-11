import { ObjectId, Document } from "mongoose";

const mongoose = require("mongoose");
const { Schema, model, ObjectId } = mongoose;

export interface storeType extends Document {
  data: any;
  storeId: ObjectId;
  name: String;
  address: String;
  thumbnail: String;
  weekends: {
    startTime: Number;
    endTime: Number;
  };
  weekdays: {
    startTime: Number;
    endTime: Number;
  };
  location: {
    coordinates: number[];
  };
  isOpen: Boolean;
}

const schema = new Schema({
  storeId: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  weekdays: {
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
  },
  weekends: {
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      default: "Point",
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const storeModel = model("stores", schema);

export default storeModel;
