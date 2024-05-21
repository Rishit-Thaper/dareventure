import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateGame } from "@/services/gameServices";
import { GameBody } from "@/types/global";

export const useGameMutations = () => {
  const queryClient = useQueryClient();
  const createGameMutation = useMutation({
    mutationFn: (data: GameBody) => {
      return apiCreateGame(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["games"] });
    },
  });
  return { createGameMutation };
};
