import mongoose, { Schema } from "mongoose";

const bootModel = new Schema({
  name: {
    type: String,
  },
  seats: {
    type: Number,
    min: 1,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  horsePower: {
    type: Number,
  },
  imageURL: {
    type: String,
  },
});

export const Boot = mongoose.model("Boot", bootModel, "boote");

//                                 (ModelName, SCHEMA, collection)
