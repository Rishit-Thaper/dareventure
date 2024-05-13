import { GET_ALL_GAMES, CREATE_GAME, GET_GAME } from "@/constants/ApiConstants";
import { postRequest, getRequest } from "@/services/ApiHelper";
import { GameType } from "@/types/global";

export const apiGetSingleGame = async (id: string) => {
  const response = await getRequest(`${GET_GAME}${id}`);
  return response;
};

export const apiCreateGame = async (data: GameType) => {
  const response = await postRequest(CREATE_GAME, data);
  return response;
};

export const apiGetAllGames = async (id: string) => {
  const response = await postRequest(GET_ALL_GAMES, id);
  return response;
};
