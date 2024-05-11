import  Player  from "@/models/playerModel";
import { PlayerType } from "@/types/global";
export const createPlayer = async (data: PlayerType) => {
  try {
    await Player.create(data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllPlayers = async (gameId: string) => {
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
