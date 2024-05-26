export type GameType = {
  _id: string;
  name: string;
  type: string;
  rating: string;
  creatorId: string;
  createdAt: string;
};
export type GameBody = Omit<GameType, "_id" | "createdAt">;

export type PlayerType = {
  _id: string;
  name: string;
  gameId: string;
};

export type PlayerBody = Omit<PlayerType, "_id">;
