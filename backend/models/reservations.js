import mongoose, { Schema } from "mongoose";

const reservationModel = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  boot: {
    type: Schema.Types.ObjectId,
    ref: "Boot",
  },
});

export const Reservation = mongoose.model("Reservation", reservationModel);
