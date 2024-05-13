import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlayerType } from "@/types/global";
import { apiAddPlayer, apiDeletePlayer } from "@/services/playerServices";

export const useGameMutations = () => {
  const queryClient = useQueryClient();
  const addPlayerMutation = useMutation({
    mutationFn: (data: PlayerType) => {
      return apiAddPlayer(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
    },
  });

  const deletePlayerMutation = useMutation({
    mutationFn: (id: string) => {
      return apiDeletePlayer(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
    },
  });
  return { addPlayerMutation, deletePlayerMutation };
};
