
export type GameType = {
  _id: string;
  name: string;
  type: string | string[];
  rating: string;
  creatorId: string;
  createdAt: string;
};
export type GameBody = Omit<GameType, "_id">;

export type PlayerType = {
  _id: string;
  name: string;
  gameId: string | string[];
};

export type PlayerBody = Omit<PlayerType, "_id">;
