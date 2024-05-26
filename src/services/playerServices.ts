import {
  GET_ALL_PLAYERS,
  DELETE_PLAYER,
  ADD_PLAYER,
} from "@/constants/ApiConstants";
import { postRequest,  deleteRequest } from "@/services/ApiHelper";
import { PlayerBody } from "@/types/global";

export const apiAddPlayer = async (data: PlayerBody) => {
  const response = await postRequest(ADD_PLAYER, data);
  return response;
};

export const apiDeletePlayer = async (id: string) => {
  const response = await deleteRequest(`${DELETE_PLAYER}${id}`);
  return response;
};

export const apiGetAllPlayers = async (gameId: string | string[]) => {
  const response = await postRequest(GET_ALL_PLAYERS, { gameId });
  return response;
};
