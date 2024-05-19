import mongoose from "mongoose";

export type GameType = {
  name: string;
  type: string | string[];
  rating: string;
  creatorId: string;
};

export type PlayerType = {
  name: string;
  gameId: mongoose.mongo.BSON.ObjectId;
};
