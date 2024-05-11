import mongoose, { Schema } from "mongoose";
const gameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    creatorId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Game = mongoose.model("game", gameSchema);
