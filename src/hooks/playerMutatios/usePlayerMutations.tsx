import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlayerBody } from "@/types/global";
import { apiAddPlayer, apiDeletePlayer } from "@/services/playerServices";

export const usePlayerMutations = () => {
  const queryClient = useQueryClient();
  const addPlayerMutation = useMutation({
    mutationFn: (data: PlayerBody) => {
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
