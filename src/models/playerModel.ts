import mongoose, { Schema } from "mongoose";
const playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gameId: {
      type: Schema.Types.ObjectId,
      ref: "Game",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Player = mongoose.model("player", playerSchema);
