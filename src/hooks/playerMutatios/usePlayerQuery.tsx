import { useQuery } from "@tanstack/react-query";
import { apiGetAllPlayers } from "@/services/playerServices";
import { queryOptions } from "@/constants/ExtraConstants";

export const usePlayerQuery = (id: string) => {
  const getAllPlayers = useQuery({
    queryKey: ["players", id],
    queryFn: () => {
      return apiGetAllPlayers(id);
    },
    ...queryOptions
  });
  return { getAllPlayers };
};
