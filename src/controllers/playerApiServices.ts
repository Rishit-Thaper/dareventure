import Player from "@/models/playerModel";
import { PlayerBody } from "@/types/global";
export const createPlayer = async (data: PlayerBody) => {
  try {
    const createPlayer = await Player.create(data);
    if (createPlayer) {
      return createPlayer;
    } else {
      return { error: "No player created" };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const allPlayers = async (gameId: string) => {
  try {
    const playersData = await Player.find({ gameId: gameId });
    if (playersData && playersData.length > 0) {
      return playersData;
    } else {
      return { error: "Add a player" };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deletePlayer = async (playerId: string) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete({ _id: playerId });
    if (deletedPlayer) {
      return { message: "Successfully Deleted" };
    } else {
      return { error: "Error Deleting the player" };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
