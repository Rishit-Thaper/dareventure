import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateGame } from "@/services/gameServices";
import { GameType } from "@/types/global";

export const useGameMutations = () => {
  const queryClient = useQueryClient();
  const createGameMutation = useMutation({
    mutationFn: (data: GameType) => {
      return apiCreateGame(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["games"] });
    },
  });
  return { createGameMutation };
};
