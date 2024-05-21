import { useQuery } from "@tanstack/react-query";
import { apiGetAllPlayers } from "@/services/playerServices";

export const usePlayerQuery = (id: string | string[]) => {
  const getAllPlayers = useQuery({
    queryKey: ["players", id],
    queryFn: () => {
      return apiGetAllPlayers(id);
    },
  });
  return { getAllPlayers };
};
