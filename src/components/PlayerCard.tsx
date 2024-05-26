import React, { useEffect } from "react";
import { usePlayerMutations } from "@/hooks/playerMutatios/usePlayerMutations";
import { PlayerType } from "@/types/global";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";

interface CardProps {
  player: PlayerType;
}
const PlayerCard: React.FC<CardProps> = ({ player }) => {
  const { deletePlayerMutation } = usePlayerMutations();
  const deletePlayer = async (playerId: string) => {
    await deletePlayerMutation.mutateAsync(playerId, {
      onSuccess: () => {
        toast.dismiss();
        toast.success("Player removed");
      },
    });
  };
  useEffect(()=>{
    if(deletePlayerMutation.isPending){
      toast.loading("Removing")
    }
  },[deletePlayerMutation.isPending])
  return (
    <div className="player">
      <p>{player.name}</p>
      <IoMdRemoveCircleOutline onClick={() => deletePlayer(player._id)} />
    </div>
  );
};

export default PlayerCard;
