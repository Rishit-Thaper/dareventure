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
    rating: {
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

const Game = mongoose.models.game || mongoose.model("game", gameSchema);
export default Game;
