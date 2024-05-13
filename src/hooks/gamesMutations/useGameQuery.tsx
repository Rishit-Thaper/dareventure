import { useQuery } from "@tanstack/react-query";
import { apiGetAllGames, apiGetSingleGame } from "@/services/gameServices";

export const useGameQuery = (id: string, userId?: string) => {
  const getSingleGame = useQuery({
    queryKey: ["games", id],
    queryFn: () => {
      return apiGetSingleGame(id);
    },
  });
  const getAllGames = useQuery({
    queryKey: ["games", userId],
    queryFn: () => {
      return apiGetAllGames(userId!);
    },
  });
  return { getSingleGame, getAllGames };
};
