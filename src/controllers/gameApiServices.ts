import Game from "@/models/gameModel";
import Player from "@/models/playerModel";
import { GameType } from "@/types/global";
export const createGame = async (data: GameType) => {
  try {
    const createdGame = await Game.create(data);
    if (createdGame) {
      return createdGame;
    } else {
      return { error: "No game found" };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGame = async (gameId: string) => {
  try {
    const gameData = await Game.findOne({ _id: gameId });
    if (gameData) {
      const playerData = await Player.find({ gameId: gameData._id });
      return { gameData, playerData };
    } else {
      return { error: "No game found" };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const allGames = async (creatorId: string) => {
  try {
    const allGamesData = await Game.find({ creatorId: creatorId });
    if (allGamesData && allGamesData.length > 0) {
      return { allGamesData };
    } else {
      return { error: "You haven't started any game yet!" };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
