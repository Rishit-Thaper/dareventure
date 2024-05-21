import mongoose from "mongoose";

export type GameType = {
  _id: string;
  name: string;
  type: string | string[];
  rating: string;
  creatorId: string;
};
export type GameBody = Omit<GameType, '_id'>

export type PlayerType = {
  _id: string;
  name: string;
  gameId: mongoose.mongo.BSON.ObjectId;
};

export type PlayerBody = Omit<PlayerType, '_id'>