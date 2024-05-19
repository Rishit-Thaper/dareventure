import { useQuery } from "@tanstack/react-query";
import { apiGetAllGames, apiGetSingleGame } from "@/services/gameServices";

export const useGameQuery = (userId?: string, id?: string) => {
  const getSingleGame = useQuery({
    queryKey: ["games", id],
    queryFn: () => {
      return apiGetSingleGame(id!);
    },
    enabled: !!id,
  });
  const getAllGames = useQuery({
    queryKey: ["games", userId],
    queryFn: () => {
      return apiGetAllGames(userId!);
    },
    enabled: !!userId,
  });
  return { getSingleGame, getAllGames };
};
