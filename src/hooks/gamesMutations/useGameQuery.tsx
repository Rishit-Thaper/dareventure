import { useQuery } from "@tanstack/react-query";
import { apiGetAllGames, apiGetSingleGame } from "@/services/gameServices";
import { queryOptions } from "@/constants/ExtraConstants";

export const useGameQuery = (userId?: string, id?: string) => {
  const getSingleGame = useQuery({
    queryKey: ["games", id],
    queryFn: () => {
      return apiGetSingleGame(id!);
    },
    enabled: !!id,
    ...queryOptions
  });
  const getAllGames = useQuery({
    queryKey: ["games", userId],
    queryFn: () => {
      return apiGetAllGames(userId!);
    },
    enabled: !!userId,
    ...queryOptions
  });
  return { getSingleGame, getAllGames };
};
