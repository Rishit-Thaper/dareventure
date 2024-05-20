import {
  GET_ALL_PLAYERS,
  DELETE_PLAYER,
  ADD_PLAYER,
} from "@/constants/ApiConstants";
import { postRequest, getRequest, deleteRequest } from "@/services/ApiHelper";
import { PlayerType } from "@/types/global";

export const apiAddPlayer = async (data: PlayerType) => {
  const response = await postRequest(ADD_PLAYER, data);
  return response;
};

export const apiDeletePlayer = async (id: string) => {
  const response = await deleteRequest(`${DELETE_PLAYER}${id}`);
  return response;
};

export const apiGetAllPlayers = async (id: string) => {
  const response = await postRequest(GET_ALL_PLAYERS, id);
  return response;
};
